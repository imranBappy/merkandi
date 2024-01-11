const DeliveryOptions = ({ productState }) => {
  const [product, setProduct] = productState;
  const handleChange = (e) => {
    const { value } = e.target;
    if (product.deliveryOptions.includes(value)) {
      setProduct({
        ...product,
        deliveryOptions: product.deliveryOptions?.filter(
          (item) => item !== value
        ),
      });
    } else {
      setProduct({
        ...product,
        deliveryOptions: [...product.deliveryOptions, value],
      });
    }
  };

  const isChecked = (id) => {
    return product.deliveryOptions.includes(id);
  };
  return (
    <div className="w-full dark:text-white  mb-4">
      <div className="box__title bg-slate-200  px-3 py-2">
        <h3 className="text-sm text-grey-darker text-black font-medium">
          Delivery options
        </h3>
      </div>
      <div className="relative bg-white dark:text-white ">
        <ul className="p-3">
          <li>
            <label className="mb-1 flex items-center">
              <input
                type="checkbox"
                className="inline-block mr-2"
                onChange={handleChange}
                checked={isChecked("collection")}
                value="collection"
              />
              <p>Collection in person</p>
            </label>
          </li>
          <li>
            <label className="mb-1 flex items-center">
              <input
                type="checkbox"
                className="inline-block mr-2"
                onChange={handleChange}
                checked={isChecked("national")}
                value="national"
              />
              <p>National delivery</p>
            </label>
          </li>
          <li>
            <label className="mb-1 flex items-center">
              <input
                type="checkbox"
                className="inline-block mr-2"
                onChange={handleChange}
                checked={isChecked("international")}
                value="international"
              />
              <p>International delivery</p>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default DeliveryOptions;
