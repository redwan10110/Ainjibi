import React from "react";
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase/firebase.init";


const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  let errorElement; 
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }
  if (user) {
    navigate('/home');
    toast.success('Login Successful', {id:'Login'});
  }
  return (
    <>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
        <p className="mt-3 mx-2">Or</p>
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
      </div>
      {errorElement}
      <div className="d-flex flex-column align-items-center gap-3">
        <Button className="w-50 " onClick={()=>signInWithGoogle()}>Login with Google </Button>
      </div>
    </>
  );
};

export default SocialLogin;
