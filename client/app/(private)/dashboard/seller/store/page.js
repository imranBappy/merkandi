"use client";

import LeftUser from "@/components/LeftUser";
import StoreAdd from "@/components/Store/StoreAdd";
import Loading from "@/components/common/Loader/Loading";
import { useGetCountriesQuery } from "@/redux/features/country/countryApi";
import { useGetStoresQuery } from "@/redux/features/store/storeApi";

export default function Store() {
  const { data, error, isLoading } = useGetCountriesQuery();
  const { data: storeData } = useGetStoresQuery();

  if (isLoading) return <Loading />;
  if (error) return <div>{error}</div>;
  const isShipping = storeData?.stores?.find(
    (store) => store.type === "shipping"
  );

  return (
    <div className="max-w-screen-xl mx-auto my-4 md:px-8">
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/12">
          <LeftUser />
        </div>
        <div className="w-full md:w-9/12 pl-0 md:pl-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {storeData?.stores?.map((store) => (
              <StoreAdd
                key={store._id}
                storeData={store}
                countries={data?.countries || []}
              />
            ))}

            <StoreAdd
              storeData={{
                type: isShipping ? "" : "shipping",
                country: data?.countries[0]?._id,
              }}
              countries={data?.countries || []}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
