import React, { useEffect } from "react";
import { app } from "../FirebaseConfig";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const Login = ({ theme, settheme }) => {
  // initialize the instance
  const auth = getAuth();
  const googleAuth = new GoogleAuthProvider();

  useEffect(() => {
    const btn = document.getElementById("btn");
    const packages = document.getElementById("packages");
    packages.style.display = "none";

    const handleLogin = () => {
      signInWithPopup(auth, googleAuth)
        .then((res) => {
          packages.style.display = "block";
        })
        .catch((err) => {
          alert(err.message);
        });
    };

    const handleLogout = () => {
      signOut(auth)
        .then((res) => {
          packages.style.display = "none";
        })
        .catch((err) => {
          alert(err.message);
        });
    };

    const updateButtonState = (user) => {
      if (user) {
        btn.textContent = "";
        let displayImage = document.createElement("img");
        displayImage.src = user.photoURL;

        displayImage.className = "w-6";

        let displayName = document.createElement("p");
        displayName.textContent = user.displayName;

        displayName.className =
          "flex justify-center items-center flex-wrap text-sm";

        let metaData = document.createElement("div");
        metaData.append(displayImage, displayName);

        metaData.className = "flex justify-center items-center flex-col";

        btn.append(metaData);
        btn.removeEventListener("click", handleLogin);
        btn.addEventListener("click", handleLogout);
      } else {
        btn.textContent = "Log in";
        btn.removeEventListener("click", handleLogout);
        btn.addEventListener("click", handleLogin);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      updateButtonState(user);
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
      btn.removeEventListener("click", handleLogin);
      btn.removeEventListener("click", handleLogout);
    };
  }, [auth, googleAuth]);

  return (
    <button
      id="btn"
      className={`bg-white text-black p-2 rounded-lg ml-3 ${theme} === "light ? btn-light : null`}
    >
      Login
    </button>
  );
};

export default Login;
