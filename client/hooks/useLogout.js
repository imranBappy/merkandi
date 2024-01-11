import { userLoggedOut } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function useLogout() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthintication } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(userLoggedOut());
    router.push("/");
    if (localStorage.getItem("auth")) {
      localStorage.removeItem("auth");
    }
  };
  return handleLogout;
}
