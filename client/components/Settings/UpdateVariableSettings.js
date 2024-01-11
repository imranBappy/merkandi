"use client";
import React, { useEffect, useState } from "react";
import Button from "../common/Button/Button";
import TextInput from "../common/Input/TextInput";
import {
  useGetSettingsQuery,
  useUpdateSettingsMutation,
} from "@/redux/features/settings/settingsApi";
import Toaster from "../common/Toaster/Toaster";

const UpdateVariableSettings = () => {
  const [error, setError] = useState({});

  const [variables, setVariables] = useState({
    host: "",
    apiUrl: "",
    apiSecret: "",
    dbUrl: "",

    algoliaAppId: "",
    algoliaSearchApiKey: "",
    algoliaAdminApiKey: "",
    algoliaIndexName: "",

    stripeKey: "",
    stripeSecret: "",

    paypalClientId: "",
    paypalClientSecret: "",
  });

  const [updateSetting, { isLoading, isError, isSuccess }] =
    useUpdateSettingsMutation();

  const { data, isLoading: isLoadingSettings } = useGetSettingsQuery();

  useEffect(() => {
    if (!isLoadingSettings && data) {
      setVariables(data.environmentVariables);
    }
  }, [data, isLoadingSettings]);

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
    }
  }, [isLoading, isError, error?.data, isSuccess]);

  const handleChange = (e) => {
    setVariables({ ...variables, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSetting({
      environmentVariables: variables,
    });
  };

  return (
    <div className="w-full mb-4 flex flex-col gap-4">
      <TextInput
        name={"host"}
        value={variables.host}
        onChange={handleChange}
        placeholder="Enter your host url"
        error={error.host}
      />
      <TextInput
        name={"apiUrl"}
        value={variables.apiUrl}
        onChange={handleChange}
        placeholder="Enter your api url"
        error={error.apiUrl}
      />
      <TextInput
        name={"apiSecret"}
        value={variables.apiSecret}
        onChange={handleChange}
        placeholder="Enter your api secret"
        error={error.apiSecret}
      />

      <TextInput
        name={"dbUrl"}
        value={variables.dbUrl}
        onChange={handleChange}
        placeholder="Enter your db url"
        error={error.dbUrl}
      />

      <TextInput
        name={"algoliaAppId"}
        value={variables.algoliaAppId}
        onChange={handleChange}
        placeholder="Enter your algolia app id"
        error={error.algoliaAppId}
      />

      <TextInput
        name={"algoliaSearchApiKey"}
        value={variables.algoliaSearchApiKey}
        onChange={handleChange}
        placeholder="Enter your algolia search api key"
        error={error.algoliaSearchApiKey}
      />

      <TextInput
        name={"algoliaAdminApiKey"}
        value={variables.algoliaAdminApiKey}
        onChange={handleChange}
        placeholder="Enter your algolia admin api key"
        error={error.algoliaAdminApiKey}
      />

      <TextInput
        name={"algoliaIndexName"}
        value={variables.algoliaIndexName}
        onChange={handleChange}
        placeholder="Enter your algolia index name"
        error={error.algoliaIndexName}
      />

      <TextInput
        name={"stripeKey"}
        value={variables.stripeKey}
        onChange={handleChange}
        placeholder="Enter your stripe key"
        error={error.stripeKey}
      />

      <TextInput
        name={"stripeSecret"}
        value={variables.stripeSecret}
        onChange={handleChange}
        placeholder={"Enter your stripe secret"}
        error={error.stripeSecret}
      />

      <TextInput
        name={"paypalClientId"}
        value={variables.paypalClientId}
        onChange={handleChange}
        placeholder={"Enter your paypal client id"}
        error={error.paypalClientId}
      />

      <TextInput
        name={"paypalClientSecret"}
        value={variables.paypalClientSecret}
        onChange={handleChange}
        placeholder={"Enter your paypal client secret"}
        error={error.paypalClientSecret}
      />

      <Button
        className={" w-full"}
        disabled={isLoading}
        onClick={handleSubmit}
        label={"Save"}
      />
    </div>
  );
};

export default UpdateVariableSettings;
