import React from "react";
import { app } from "../FirebaseConfig";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = ({ theme, settheme }) => {
  // initialize the instance
  const auth = getAuth();
  const googleAuth = new GoogleAuthProvider();

  const HandleSubmit = (e) => {
    signInWithPopup(auth, googleAuth)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <button
      onClick={HandleSubmit}
      className={`bg-white text-black p-2 rounded-lg ml-3 ${theme} === "light ? btn-light : null`}
    >
      Login
    </button>
  );
};

export default Login;
