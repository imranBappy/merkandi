import { useEffect, useState } from "react";

const DynamicFieldPrice = ({ productState }) => {
  const [product, setProduct] = productState;

  const [fields, setFields] = useState([
    {
      price: 0,
      quantity: 0,
      to: 0,
    },
  ]);

  useEffect(() => {
    setFields([...product.wholesalePrices]);
  }, [product]);

  const addField = () => {
    setFields([
      ...fields,
      {
        price: 0,
        quantity: 0,
        to: 0,
      },
    ]);
  };

  const removeField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);

    setProduct({
      ...product,
      wholesalePrices: newFields,
    });
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newFields = [...fields];
    const temp = newFields[index];

    const updatedTemp = {
      ...temp,
      [name]: value,
    };

    newFields[index] = updatedTemp;
    setFields(newFields);
    setProduct({
      ...product,
      wholesalePrices: newFields,
    });
  };

  return (
    <>
      {fields.map((field, index) => (
        <div key={index} className="flex items-center mb-2 w-full">
          <input
            type="number"
            placeholder="Price"
            value={field.price}
            name="price"
            onChange={(e) => handleChange(e, index)}
            className="p-2 border mr-2 w-full outline-0"
          />
          <input
            name="quantity"
            type="number"
            placeholder="quantity"
            value={field.quantity}
            onChange={(e) => handleChange(e, index)}
            className="p-2 border mr-2 w-full outline-0"
          />
          <p>To</p>
          <input
            name="to"
            type="number"
            placeholder="to"
            value={field.to}
            onChange={(e) => handleChange(e, index)}
            className="p-2 border mx-2 w-full outline-0"
          />
          <button
            onClick={() => removeField(index)}
            className="bg-red-500 text-white p-2"
          >
            X
          </button>
        </div>
      ))}
      <button
        onClick={addField}
        className="bg-green-500 text-white px-2 py-1 rounded"
      >
        Add Field
      </button>
    </>
  );
};

export default DynamicFieldPrice;
