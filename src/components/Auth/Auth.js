import React from "react";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Auth = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
};

export default Auth;
