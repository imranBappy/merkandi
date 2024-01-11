import Button from "../Button/Button";

const Modal = ({ title = "", children, state, setTab, tab }) => {
  const [showModal, setShowModal] = state;
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  /*
    const [images, setImages] = useState([]);
  */
  return (
    showModal && (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#000000da] z-50 duration-700 ">
        <div className="m-auto rounded-md absolute h-screen top-0 left-0 right-0 bottom-0 md:p-20 ">
          <div className="flex items-center justify-between w-full px-6   pt-5 bg-white rounded-t-md ">
            <h5 className=" text-lg ">{title}</h5>
            <button className="p-3" onClick={toggleModal}>
              <svg
                stroke="currentColor"
                className="fill-white"
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
          </div>
          <div
            className="flex items-center pb-2 justify-between w-full px-3  
            max-h-[calc(100vh-200px)] overflow-y-auto relative  bg-white  rounded-b-md
          "
          >
            {children}
          </div>
        </div>
      </div>
    )
  );
};
export default Modal;
