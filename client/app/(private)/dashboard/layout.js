import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import userType from "@/utils/userType";
export default function AdminLayout({ children }) {
  return (
    <PrivateRoute role={[userType.premium, userType.staff]}>
      {children}
    </PrivateRoute>
  );
}
