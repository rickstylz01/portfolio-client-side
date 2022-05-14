import axios from "axios";
import useAuth from "./UseAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

    const response = await axios.get(`${BACKEND_URL}refresh`, {
      withCredentials: true
    });
    setAuth(prev => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      return { ...prev, accessToken: response.data.accessToken }
    });
    return response.data.accessToken;
  }
  return refresh;
}

export default useRefreshToken;
