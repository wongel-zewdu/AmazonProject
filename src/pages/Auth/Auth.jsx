import React, { useState, useContext } from "react";
import amazonLog from "./amazon logo/amazon-logo-2.png";
import classes from "./Auth.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../utiliy/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../components/DataProvider/Data provider";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);
  console.log(user);
  const authHandler = async (e) => {
    e.preventDefault();
    if (e.target.name == "signin") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: "SET_USER",
            user: userInfo.user,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: "SET_USER",
            user: userInfo.user,
          });
        })
        .catch((err) => {
          setError(err.message)
        });
    }
  };
  return (
    <div className={classes.auth}>
      <div>
        <div className={classes.auth__continer__img}>
          <ul>
            <Link to="/">
              <img src={amazonLog} className={classes.auth__img} />
            </Link>
          </ul>
        </div>
        <div className={classes.auth__login__container}>
          <h1 className={classes.auth__tittle}>sign in</h1>
          <form action="" method="">
            <div>
              <label htmlFor="email">Email</label>
              <div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password">PassWord</label>
              <div>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                />
              </div>
              <div>
                <button
                  type="submit"
                  onClick={authHandler}
                  name="signin"
                  className={classes.auth__siginButton}
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
          <p>
            BY sign-in you agree to AMAZON FAKE CLONE Condition of use & sale.
            place see our privact Notice. our Cookies Notice and our
            interest-Based Ads Notice.
          </p>
          <button
            type="submit"
            onClick={authHandler}
            name="signup"
            className={classes.auth__signupButton}
          >
            Create Your Amazon Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
// ****************************************************************************88
