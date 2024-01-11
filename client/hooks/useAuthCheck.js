import { userLoggedIn } from "@/redux/features/auth/authSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authCheck, setAuthCheck] = useState(false);

  useEffect(() => {
    let localAuth = localStorage.getItem("auth");
    if (!localAuth) {
      dispatch(userLoggedIn({}));
      setAuthCheck(true);
      return;
    }
    localAuth = JSON.parse(localAuth);
    if (
      !localAuth?.accessToken ||
      !localAuth?.data ||
      !localAuth?.isAuthintication
    ) {
      dispatch(userLoggedIn({}));
      setAuthCheck(true);
      return;
    }
    dispatch(userLoggedIn(localAuth));
    setAuthCheck(true);
  }, [dispatch]);
  return authCheck;
}
