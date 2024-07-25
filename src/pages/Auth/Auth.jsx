import React, { useState, useContext } from "react";
import amazonLog from "./amazon logo/amazon-logo-2.png";
import classes from "./Auth.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../utility/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../components/DataProvider/Data provider";
import { ClipLoader } from "react-spinners";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
 const navStateData = useLocation()
 console.log(navStateData)
  const [loading, setLoading] = useState({
    signIn: false,
    signUP: false,
  });

  const authHandler = async (e) => {
    e.preventDefault();
    if (e.target.name == "signin") {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: "SET_USER",
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect||"/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUP: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: "SET_USER",
            user: userInfo.user,
          });
          setLoading({ ...loading, signUP: false });
            navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUP: false });
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
          {
            navStateData?.state?.msg && (
              <small style={{
                padding:"5px",
                textAlign:"center",
                color:"red",
                fontWeight:"bold"
              }}>
                {navStateData?.state?.msg}
              </small>
            )
          }
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
                  type="button"
                  onClick={authHandler}
                  name="signin"
                  className={classes.auth__siginButton}
                >
                  {loading.signIn ? <ClipLoader size={16} /> : "sign In"}
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
            type="button"
            onClick={authHandler}
            name="signup"
            className={classes.auth__signupButton}
          >
            {loading.signUP ? (
              <ClipLoader size={16} />
            ) : (
              " Create Your Amazon Account"
            )}
          </button>
          {error && <small className={classes.auth__error}>{error}</small>}
        </div>
      </div>
    </div>
  );
};

export default Auth;
