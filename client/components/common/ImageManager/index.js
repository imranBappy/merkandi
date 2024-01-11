import React, { useEffect, useState } from "react";
import UploadImages from "./UploadImages";
import BrowseImages from "./BrowseImages";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { imageApi } from "@/redux/features/files/imageApi";

const ImageManager = ({
  selectedState,
  className,
  label,
  error,
  setError = () => {},
  multiple = false,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [tab, setTab] = useState(1);
  const [selected, setSelected] = selectedState;
  const [term, setTerm] = useState("");
  // const { data, refetch, isLoading } = useSearchImagesQuery();

  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (term) {
        dispatch(
          imageApi.endpoints.searchImages.initiate(term, {
            forceRefetch: true,
          })
        );
      } else {
        dispatch(
          imageApi.endpoints.getMoreImages.initiate(
            {
              page: 1,
              isNew: true,
            },
            {
              forceRefetch: true,
            }
          )
        );
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [term, dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (term) {
      dispatch(
        imageApi.endpoints.searchImages.initiate(term, {
          forceRefetch: true,
        })
      );
    } else {
      dispatch(
        imageApi.endpoints.getMoreImages.initiate(
          {
            page: 1,
            isNew: true,
          },
          {
            // invalid previous data
            forceRefetch: true,
          }
        )
      );
    }
  };

  return (
    <>
      <button
        className={`border  h-10 p-2 w-full bg-white text-gray-500 ${className}`}
        onClick={() => setShowModal(!showModal)}
      >
        {label || " Choose Image"}{" "}
        {selected.length > 0 && `(${selected.length})`}
      </button>
      <p style={{ marginLeft: 1 }} className="text-red-600 text-xs mt-1">
        {error}
      </p>

      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#000000da] z-50 duration-700 ">
          <div className="m-auto rounded-md absolute h-screen top-0 left-0 right-0 bottom-0 md:p-20 ">
            <div className="flex items-center justify-between w-full px-6   pt-5 bg-white rounded-t-md ">
              <h5 className=" text-lg ">Manage You Images</h5>
              <button
                className="p-2 flex items-center justify-center ring-2 ring-black rounded-full "
                onClick={toggleModal}
              >
                <svg
                  stroke="currentColor"
                  className="fill-black"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
                </svg>
              </button>
            </div>
            <div className="flex space-x-2  px-5 bg-white">
              <Button
                onClick={() => setTab(1)}
                label={"Upload"}
                active={tab === 1}
              />
              <Button
                onClick={() => setTab(2)}
                label={"Browse"}
                active={tab === 2}
              />

              {/* search box with btn */}

              <form
                onSubmit={handleSearch}
                className="flex items-center justify-center  px-3   bg-gray-100 rounded-md relative "
              >
                <input
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  type="text"
                  className="w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-0"
                  placeholder="Search"
                />
                <button onClick={handleSearch} className="absolute right-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
              </form>
            </div>
            {/* <div className=" pb-2 w-full px-3   max-h-[calc(100vh-200px)] overflow-y-auto   bg-white  rounded-b-md relative "> */}
            {/* <div  className="w-full p-5 "> */}
            {tab === 1 ? (
              <div className=" w-full p-5  max-h-[calc(100vh-200px)] overflow-y-auto   bg-white  rounded-b-md relative ">
                <UploadImages setError={setError} tab={tab} />
              </div>
            ) : (
              <BrowseImages
                setError={setError}
                multiple={multiple}
                selectedState={[selected, setSelected]}
                tab={tab}
              />
            )}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageManager;
