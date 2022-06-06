import "./App.css";
import React from "react";
import { Toaster } from "react-hot-toast";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import NotFound from './Components/NotFound/NotFound';

import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";

import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import RequireAuth from "./Components/Login/RequireAuth/RequireAuth";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div className="">
      <Toaster></Toaster>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/services/:serviceId"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
