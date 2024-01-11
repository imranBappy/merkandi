import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";

const Categories = ({ productState }) => {
  const { data, error } = useGetCategoriesQuery();
  const [product, setProduct] = productState;

  const handleChangeCategory = (e) => {
    const { value } = e.target;
    setProduct({
      ...product,
      category: value,
    });
  };
  const handleChangeSubcategory = (e) => {
    const { value } = e.target;

    if (product.subcategory.includes(value)) {
      setProduct({
        ...product,
        subcategory: product.subcategory.filter((item) => item !== value),
      });
      return;
    }

    setProduct({
      ...product,
      subcategory: [...product.subcategory, value],
    });
  };

  return (
    <div className="w-full dark:text-white  mb-4">
      <div className="box__title bg-slate-200  px-3 py-2">
        <h3 className="text-sm text-grey-darker text-black font-medium">
          Categories
        </h3>
      </div>
      <div className="relative bg-white dark:text-white ">
        <ul className=" overflow-y-scroll p-3 pr-0 h-72">
          {data?.categories?.map((item) => (
            <li key={item._id}>
              <label className="mb-1 flex items-center">
                <input
                  type="checkbox"
                  value={item._id}
                  onChange={handleChangeCategory}
                  checked={product.category === item._id}
                  className="inline-block mr-2"
                />
                <p>{item.name}</p>
              </label>
              {
                <ul className="ml-4">
                  {item.subcategory?.map((sub) => (
                    <li key={sub._id}>
                      <label className="mb-1 flex items-center">
                        <input
                          type="checkbox"
                          value={sub._id}
                          onChange={handleChangeSubcategory}
                          checked={product.subcategory.includes(sub._id)}
                          className="inline-block mr-2"
                        />
                        <p>{sub.name}</p>
                      </label>
                    </li>
                  ))}
                </ul>
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Categories;
