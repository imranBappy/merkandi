import { useGetCountriesQuery } from "@/redux/features/country/countryApi";

const Country = ({ productState }) => {
  const { data, isLoading } = useGetCountriesQuery();

  const [product, setProduct] = productState;
  const handleChange = (country) => {
    if (isChecked(country._id)) {
      setProduct({
        ...product,
        country: product.country?.filter((item) => item._id !== country._id),
      });
    } else {
      setProduct({
        ...product,
        country: [...product.country, country],
      });
    }
  };

  const isChecked = (id) => {
    return !!product.country.find((item) => item._id === id);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="w-full    mb-4">
      <div className="box__title bg-slate-200  px-3 py-2">
        <h3 className="text-sm text-grey-darker text-black font-medium">
          Country
        </h3>
      </div>
      <div className="relative bg-white  ">
        <ul className="overflow-y-scroll p-3 pr-0 h-72">
          {data?.countries?.map((item) => (
            <li key={item._id}>
              <label className="mb-1 flex items-center">
                <input
                  onChange={() => handleChange(item)}
                  type="checkbox"
                  checked={isChecked(item._id)}
                  value={item._id}
                  className="inline-block mr-2"
                />
                <p>{item.name}</p>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Country;
