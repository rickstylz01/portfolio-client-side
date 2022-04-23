import React, {useContext} from 'react';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import AuthContext from "../../Context/authProvider";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const handleLogout = () => {
    setAuth({});
    navigate('/');
  }

  return (
    <Button onClick={handleLogout} variant="outline-info">Logout</Button>
  )
}

export default LogoutButton;
