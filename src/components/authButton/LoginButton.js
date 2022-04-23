import React from 'react';
import {Link} from "react-router-dom";

const LoginButton = () => {
  return (
    <Link to="/login" className="btn btn-outline-info">Log In</Link>
  )
}

export default LoginButton;
