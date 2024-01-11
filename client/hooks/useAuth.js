import { useSelector } from "react-redux";

export default function useAuth() {
  const auth = useSelector((state) => state.auth);

  if (auth.accessToken && auth.data && auth.isAuthintication) {
    return true;
  } else {
    return false;
  }
}
