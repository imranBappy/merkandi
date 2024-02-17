"use client";
import Registation from "@/components/Auth/Registation";
import RegistationRightSiteInfo from "@/components/Auth/RegistationRightSiteInfo";
import RegistationRightSiteInfo2 from "@/components/Auth/RegistationRightSiteInfo2";
import PublicRoute from "@/components/PublicRoute/PublicRoute";
import { useSearchParams } from "next/navigation";

export default function Register() {
  const searchParams = useSearchParams();
  const search = searchParams.get("plan");
  const Info =
    search === "premium" ? (
      <RegistationRightSiteInfo2 />
    ) : (
      <RegistationRightSiteInfo />
    );
  return (
    <PublicRoute>
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="flex flex-col md:flex-row my-8">
          <Registation />
          {Info}
        </div>
      </div>
    </PublicRoute>
  );
}
