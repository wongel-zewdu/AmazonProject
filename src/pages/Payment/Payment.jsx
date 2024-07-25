import React, { useContext, useState } from "react";
import classes from "./payment.module.css";
import { DataContext } from "../../components/DataProvider/Data provider";
import ProductCard from "../../components/product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../Api/axios";
import ClipLoader from "react-spinners/ClipLoader";
import { db } from "../../utility/firebase";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const [{ user, basket }] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const handleChange = (e) => {
    e.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      setProcessing(true);

      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });

      console.log("Response from server:", response.data);

      const clientSecret = response.data?.clientSecret;

      if (!clientSecret) {
        throw new Error("Client secret is missing from the response.");
      }

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        }
      );

      if (error) {
        console.error("Payment failed:", error.message);
        setCardError(error.message);
        setProcessing(false);
        return;
      }

      if (paymentIntent.status === "succeeded") {
        console.log("Payment succeeded:", paymentIntent);

        try {
          await db
            .collection("users")
            .doc(user.uid)
            .collection("orders")
            .doc(paymentIntent.id)
            .set({
              basket: basket,
              amount: paymentIntent.amount,
              created: new Date(paymentIntent.created * 1000).toISOString(),
            });
          console.log("Data successfully written!");

          navigate("/orders", {
            state: { msg: "You have placed a new order" },
          });
        } catch (dbError) {
          console.error("Error writing document:", dbError);
        }
      } else {
        console.log("Payment status:", paymentIntent.status);
      }

      setProcessing(false);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      setCardError("An unexpected error occurred.");
      setProcessing(false);
    }
  };

  return (
    <section>
      <div className={classes.payment__header}>
        CheckOut ({totalItem}) times
      </div>
      <section className={classes.payment}>
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div></div>
            <div>1234</div>
            <div>New York, NY</div>
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Review item and delivery</h3>

          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} key={item.id} />
            ))}
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Payment Method</h3>
          <div className={classes.payment__card__container}>
            <div className={classes.payment__details}>
              <form onSubmit={handlePayment}>
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handleChange} />
                <div className={classes.payment__price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order |</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit">
                    {processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="gray" size={12} />
                        <p>please wait ...</p>
                      </div>
                    ) : (
                      "Place your order"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Payment;
