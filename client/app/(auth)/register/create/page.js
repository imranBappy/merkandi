"use client";
import { useState, useEffect } from "react";

import Registation from "@/components/Auth/Registation";
import RegistationRightSiteInfo from "@/components/Auth/RegistationRightSiteInfo";

export default function Register() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="flex flex-col md:flex-row my-8">
          <Registation />
          <RegistationRightSiteInfo />
        </div>
      </div>
    </>
  );
}
