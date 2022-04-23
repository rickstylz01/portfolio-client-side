import React from 'react';
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import useAuth from "../../hooks/UseAuth";

const AuthButton = () => {
  const { auth } = useAuth();
  const loggedIn = auth?.user;

  return (
    loggedIn
      ? <LogoutButton />
      : <LoginButton />
  );
}

export default AuthButton;
