"use client";

import useAuth from "@/hooks/useAuth";
import useAuthCheck from "@/hooks/useAuthCheck";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import Loading from "../common/Loader/Loading";

const PrivateRoute = (props) => {
  const { children, role = [] } = props;
  const isAuthintication = useAuth();
  const { data } = useSelector((state) => state.auth);
  const router = useRouter();
  const check = useAuthCheck();
  if (!check) {
    return <Loading />;
  } else if (isAuthintication && role.includes(data?.role)) {
    return <>{children}</>;
  }
  router.push("/login");
};

export default PrivateRoute;
