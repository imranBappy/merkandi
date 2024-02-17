"use client";

import useAuth from "@/hooks/useAuth";
import useAuthCheck from "@/hooks/useAuthCheck";
import { useRouter } from "next/navigation";
import React from "react";
import Loading from "../common/Loader/Loading";

const PublicRoute = (props) => {
  const { children } = props;
  const isAuthintication = useAuth();
  const router = useRouter();
  const check = useAuthCheck();
  if (!check) {
    return <Loading />;
  } else if (isAuthintication) {
    router.push("/");
  }
  return <>{children}</>;
};

export default PublicRoute;
