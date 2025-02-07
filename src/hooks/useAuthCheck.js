import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    try {
      const localAuth = localStorage.getItem("auth");

      if (localAuth) {
        const auth = JSON.parse(localAuth);

        if (auth?.email) {
          dispatch(userLoggedIn({ email: auth.email }));
        }
      }
    } catch {
      dispatch(userLoggedIn({ email: null }));
    } finally {
      setAuthChecked(true);
    }
  }, [dispatch, setAuthChecked]);

  return authChecked;
}
