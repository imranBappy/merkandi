"use client";
import DynamicFieldPrice from "./DynamicFieldPrice";
import { useGetProductsGroupQuery } from "@/redux/features/productGroup/productGroupApi";

function Price({ productState, errorState, handleChange }) {
  const [product, setProduct] = productState;
  const [error, setError] = errorState;
  const { data } = useGetProductsGroupQuery();

  return (
    <div className="w-full   mt-4">
      <div className="box__title bg-slate-200  px-3 py-2">
        <h3 className="text-sm text-grey-darker font-medium">Price</h3>
      </div>
      <div className="relative bg-white  ">
        <div className="md:flex md:items-center p-2">
          <label className="md:w-60">Regular price ($)</label>
          <div className="w-full">
            <input
              className="w-full p-1  border outline-0 border-slate-400   rounded"
              type="text"
              name="price"
              onChange={handleChange}
              value={product.price}
            />
            <p style={{ marginLeft: 1 }} className="text-red-600 text-xs mt-1">
              {error.price}
            </p>
          </div>
        </div>

        <div className="md:flex md:items-center p-2">
          <label className="md:w-60">Sale price ($)</label>
          <input
            className="w-full p-1 border outline-0 border-slate-400   rounded"
            type="text"
            name="salePrice"
            onChange={handleChange}
            value={product.salePrice}
          />
        </div>
        <div className="md:flex p-2">
          <label className="md:w-60">Wholesale</label>
          <div className="w-full max-w-md">
            <input
              className="border outline-0 border-slate-400 rounded h-5 w-5"
              type="checkbox"
              name="name"
              checked={product.wholesale}
              onChange={(e) =>
                handleChange({
                  target: {
                    name: "wholesale",
                    value: e.target.checked,
                  },
                })
              }
              value={product.wholesale}
            />
          </div>
        </div>
        <div className="md:flex flex-col p-2">
          {product.wholesale && (
            <DynamicFieldPrice productState={[product, setProduct]} />
          )}
        </div>
        <div className="md:flex p-2">
          <label className="md:w-60">Negotiable</label>
          <div className="w-full max-w-md">
            <input
              className="border outline-0 border-slate-400 rounded h-5 w-5"
              type="checkbox"
              name="negotiable"
              checked={product.negotiable}
              onChange={(e) =>
                handleChange({
                  target: {
                    name: "negotiable",
                    value: e.target.checked,
                  },
                })
              }
              value={product.negotiable}
            />
          </div>
        </div>
        <div className="md:flex md:items-center p-2">
          <label className="md:w-60">Unit</label>
          <div className="relative w-full border outline-0 max-w-md border-slate-400 rounded">
            <select
              className="appearance-none outline-0 w-full py-1 px-2 bg-white"
              name="unit"
              id="frm-whatever"
              onChange={handleChange}
              value={product.unit}
            >
              <option value="piece">Piece </option>
              <option value="pair">Pair </option>
              <option value="kg">KG</option>
              <option value="size">Size</option>
              <option value="litre">Litre</option>
              <option value="gram">Gram</option>
              <option value="meter">Meter</option>
              <option value="meter">Meter</option>
            </select>
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="md:flex md:items-center p-2">
          <label className="md:w-60">Status</label>
          <div className="relative w-full border outline-0 max-w-md border-slate-400 rounded">
            <select
              className="appearance-none outline-0 w-full py-1 px-2 bg-white"
              name="status"
              id="frm-whatever"
              onChange={handleChange}
              value={product.status}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center p-2">
          <label className="md:w-60">Label</label>
          <div className="relative w-full border outline-0 max-w-md border-slate-400 rounded">
            <select
              className="appearance-none outline-0 w-full py-1 px-2 bg-white"
              name="label"
              id="frm-whatever"
              onChange={handleChange}
              value={product.label}
            >
              <option value="">Select Label</option>
              <option value="new">New</option>
              <option value="hot">Hot</option>
              <option value="sale">Sale</option>
            </select>
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center p-2">
          <label className="md:w-60">Product Group</label>
          <div className="relative w-full border outline-0 max-w-md border-slate-400 rounded">
            <select
              className="appearance-none outline-0 w-full py-1 px-2 bg-white"
              name="productGroup"
              id="frm-whatever"
              onChange={handleChange}
              value={product.productGroup}
            >
              <option value="">Select Product Group</option>
              {data?.productGroups?.map((group) => (
                <option key={group._id} value={group._id}>
                  {group.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
              </svg>
            </div>
          </div>
        </div>
        <hr className="my-4"></hr>
        <div className="md:flex md:items-center p-2">
          <label className="md:w-60">Product Stock</label>
          <input
            onChange={handleChange}
            className="w-full p-1 border outline-0 border-slate-400   rounded"
            type="number"
            name="stock"
            value={product.stock}
          />
        </div>

        <div className="md:flex md:items-center p-2 mb-4">
          <label className="md:w-60">Minimal order</label>
          <input
            onChange={handleChange}
            className="w-full p-1 border outline-0 border-slate-400   rounded"
            type="number"
            name="minimalOrder"
            value={product.minimalOrder}
          />
        </div>
        {/* <div className="md:flex md:items-center p-2">
          <label className="md:w-60">Stock status</label>
          <div className="relative w-full border outline-0 max-w-md border-slate-400 rounded">
            <select
              className="appearance-none outline-0 w-full py-1 px-2 bg-white"
              name="whatever"
              id="frm-whatever"
            >
              <option value="1">In stock</option>
              <option value="2">Out of stock</option>
              <option value="3">On backorder</option>
            </select>
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
              </svg>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
export default Price;
