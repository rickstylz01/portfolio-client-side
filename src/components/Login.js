import React, {useState, useRef, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import axios from "axios";

export const LoginForm = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BACKEND_URL}login`,
        JSON.stringify({username: user, password}),
        {
          headers: { 'Content-Type': 'application/json'},
          withCredentials: true
        });
      const accessToken = response?.data?.accessToken;
      setAuth({ user, password, accessToken });
      setUser('');
      setPassword('');
      navigate(from, { replace: true });
    } catch (err) {
      debugger
      if (!err?.response) {
        setErrMsg(err.response.data.message);
      } else if (err.response?.status === 401) {
        setErrMsg(err.response.data.message);
      } else {
        setErrMsg(err.response.data.message);
      }
      errRef.current.focus();
    }
  }

  return(
    <div className="LoginForm p-4">
      <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Please Log In</h1>
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                required
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                className="form-control"
                onChange={(e) => setUser(e.target.value)}
                value={user}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                required
                type="password"
                id="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <button className="btn btn-outline-info brn-lg btn-block">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
