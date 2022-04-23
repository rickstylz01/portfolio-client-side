import React from 'react';
import LogoutButton from "./logoutButton";
import LoginButton from "./loginButton";
import useAuth from "../../Hooks/useAuth";

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
