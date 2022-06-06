import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.init";

import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  //   console.log(user);
  //   Redirected to page (before login )

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
    toast.success("Welcome", { id: "login" });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    
    // console.log(email, password);
  };
  const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(
    auth
  );
  const handleResetPassword = async (event)=>{
      event.preventDefault();
    const email = emailRef.current.value;
    if(email){
        await sendPasswordResetEmail(email);
        toast.success('Email has sent', {id:'reset-password'})
    }else{
        toast.error('Enter Email Address', {id:'reset-password'})
    }
  }
  let errorElement;
  if (error ) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message} 
        </p>
      </div>
    );
  }
  return (
    <div className="container w-50 mx-auto my-5">
      <h1 className="text-primary text-center">Please Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
      <p className="my-5">
        New to This Website? <Link className="btn btn-link text-decoration" to='/register'>Create A New Account</Link>
      </p>
      <p className="my-5">
        Forget Password? <button className="btn btn-link text-decoration" onClick={handleResetPassword} >Reset Password</button>
      </p>
        {errorElement}
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
