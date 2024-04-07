import React from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import apps from "../firebase/firebase.config.js";
import {Navigate, redirect, useNavigate} from "react-router-dom";
// import { redirect } from 'react-router-dom'; // Import useHistory from React Router

const Login = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
	const navigate = useNavigate()


  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
       if(loggedUser) {
				 navigate("/")
			 }
      })
      .catch((error) => {
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(errorMessage);
        // Handle error appropriately (e.g., show error message to user)
      });
  };


	return (
		<div className={"h-screen w-full flex items-center justify-center"}>
			<button className={"bg-blue px-8 py-2 text-white"} onClick={handleLogin}>Login</button>
		</div>
	);
};

export default Login;