import { useGetBrandsQuery } from "@/redux/features/brand/brandApi";

const Brands = ({ productState }) => {
  const { data, isLoading } = useGetBrandsQuery();
  const [product, setProduct] = productState;

  const handleChange = (brand) => {
    if (product.brand?._id === brand._id) {
      setProduct({
        ...product,
        brand: "",
      });

      return;
    }

    setProduct({
      ...product,
      brand: brand,
    });
  };

  return (
    <div className="w-full  mb-4">
      <div className="box__title bg-slate-200  px-3 py-2">
        <h3 className="text-sm text-grey-darker text-black   font-medium">
          Brands
        </h3>
      </div>
      <div className="relative bg-white e ">
        <ul className="overflow-y-scroll p-3 pr-0 h-72">
          {data?.brands?.map((item) => (
            <li key={item._id}>
              <label className="mb-1 flex items-center">
                <input
                  onChange={() => handleChange(item)}
                  type="checkbox"
                  value={item._id}
                  checked={product?.brand._id === item._id}
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
export default Brands;
