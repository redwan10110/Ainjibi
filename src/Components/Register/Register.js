import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import toast from "react-hot-toast";
import auth from "../../firebase/firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: "true" });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  // Toggle for term and condition
  const [agree, setAgree] = useState(false);

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passRef = useRef("");
  const confirmPassRef = useRef("");

  // navigate to home
  const navigate = useNavigate();
  
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const confirmPassword = confirmPassRef.current.value;
    await createUserWithEmailAndPassword(email, password);
    toast.success("User Created Successfully", { id: "register" });
    await updateProfile({ displayName: name });
    navigate("/home");
    toast.success("Profile Updated", { id: "profile-update" });


  };
  return (
    <div className="container w-50 mx-auto my-5">
      <h1 className="text-primary text-center">Please Register</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
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
            ref={passRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            ref={confirmPassRef}
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => setAgree(!agree)}
            type="checkbox"
            label="Accept Terms and Condition"
            name="terms"
            id="terms"
            className={agree ? "text-primary" : "text-danger"}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="w-100"
          disabled={!agree}
        >
          Register
        </Button>
      </Form>
      <p className="my-5">
        Already Have an Account? <Link to="/login">Please Login</Link>
      </p>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
