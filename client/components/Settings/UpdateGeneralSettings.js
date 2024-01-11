"use client";
import React, { useEffect, useState } from "react";
import Toaster from "../common/Toaster/Toaster";
import Button from "../common/Button/Button";
import ImageManager from "../common/ImageManager";
import {
  useGetSettingsQuery,
  useUpdateSettingsMutation,
} from "@/redux/features/settings/settingsApi";

const UpdateGeneralSettings = () => {
  const [favicon, setFavicon] = useState([]);
  const [footerLogo, setFooterLogo] = useState([]);
  const [headerLogo, setHeaderLogo] = useState([]);

  const [updateSetting, { isLoading, error, isError, isSuccess }] =
    useUpdateSettingsMutation();
  const { data, isLoading: isLoadingSettings } = useGetSettingsQuery();

  useEffect(() => {
    if (isError) {
      Toaster({
        type: "error",
        message: error?.data || "Something went wrong",
      });
    }
    if (isSuccess && !isLoading && !isError) {
      Toaster({
        type: "success",
        message: "Added successfully",
      });
      setFavicon([]);
      setFooterLogo([]);
      setHeaderLogo([]);
    }
  }, [data, isLoading, isError, error?.data, isSuccess]);

  useEffect(() => {
    if (!isLoadingSettings && data) {
      setFavicon([data.favicon]);
      setFooterLogo([data.footerLogo]);
      setHeaderLogo([data.logo]);
    }
  }, [data, isLoadingSettings]);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateSetting({
      logo: headerLogo[0],
      favicon: favicon[0],
      footerLogo: footerLogo[0],
    });
  };

  return (
    <div className="w-full mb-4 flex flex-col gap-4">
      <ImageManager
        label={"Favicon"}
        image={favicon}
        selectedState={[favicon, setFavicon]}
        name={"favicon"}
      />
      <ImageManager
        label={"Header Logo"}
        image={headerLogo}
        selectedState={[headerLogo, setHeaderLogo]}
        name={"headerLogo"}
      />
      <ImageManager
        label={"Footer Logo"}
        image={footerLogo}
        selectedState={[footerLogo, setFooterLogo]}
        name={"footerLogo"}
      />

      <Button className={" w-full"} onClick={handleSubmit} label={"Save"} />
    </div>
  );
};

export default UpdateGeneralSettings;
