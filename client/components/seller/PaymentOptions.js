const PaymentOptions = ({ productState }) => {
  const [product, setProduct] = productState;
  const handleChange = (e) => {
    const { value } = e.target;
    if (product.acceptPayments.includes(value)) {
      setProduct({
        ...product,
        acceptPayments: product.acceptPayments?.filter(
          (item) => item !== value
        ),
      });
    } else {
      setProduct({
        ...product,
        acceptPayments: [...product.acceptPayments, value],
      });
    }
  };

  const isChecked = (id) => {
    return product.acceptPayments.includes(id);
  };
  return (
    <div className="w-full dark:text-white mb-4">
      <div className="box__title bg-slate-200  px-3 py-2">
        <h3 className="text-sm text-grey-darker text-black font-medium">
          Payment options
        </h3>
      </div>
      <div className="relative bg-white dark:text-white ">
        <ul className="p-3">
          <li>
            <label className="mb-1 flex items-center">
              <input
                type="checkbox"
                value="stripe"
                className="inline-block mr-2"
                onChange={handleChange}
                checked={isChecked("stripe")}
              />
              <p>Stripe</p>
            </label>
          </li>
          <li>
            <label className="mb-1 flex items-center">
              <input
                type="checkbox"
                value="paypal"
                className="inline-block mr-2"
                onChange={handleChange}
                checked={isChecked("paypal")}
              />
              <p>Paypal</p>
            </label>
          </li>
          <li>
            <label className="mb-1 flex items-center">
              <input
                type="checkbox"
                value="manual"
                className="inline-block mr-2"
                onChange={handleChange}
                checked={isChecked("manual")}
              />
              <p>Manual</p>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default PaymentOptions;
