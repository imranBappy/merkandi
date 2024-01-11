"use client";

import Loading from "@/components/common/Loader/Loading";
import { useGetPageQuery } from "@/redux/features/page/pageApi";
import React from "react";

//capitalize Page Component
const Page = ({ params }) => {
  const { data, isLoading } = useGetPageQuery(params.slug, {
    refetchOnMountOrArgChange: true,
    skip: !params.slug,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container m-auto bg-white p-3">
      <div dangerouslySetInnerHTML={{ __html: data?.content }} />
    </div>
  );
};

export default Page;
