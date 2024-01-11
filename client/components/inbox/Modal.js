/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAddConversationMutation } from "@/redux/features/conversactions/conversactionsApi";
import Toaster from "../common/Toaster/Toaster";

export default function Modal({ open, control }) {
  const [payload, setPayload] = useState({
    participant: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [
    addConversation,
    { isSuccess: isAddConversationSuccess, isError, error },
  ] = useAddConversationMutation();

  useEffect(() => {
    if (isAddConversationSuccess) {
      Toaster({
        type: "success",
        message: "Message sent successfully!",
      });
      control();
    }
    if (isError) {
      Toaster({
        type: "error",
        message: error?.data,
      });
    }
  }, [isAddConversationSuccess, error?.data, isError]);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
    errors[name] && setErrors({ ...errors, [name]: "" });
  };

  // form handling
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!payload.participant) {
      errors.participant = "Email is required!";
    }
    if (!payload.message) {
      errors.message = "Message is required!";
    }
    if (Object.keys(errors).length > 0) {
      return setErrors(errors);
    }

    addConversation(payload);
  };
  return (
    open && (
      <>
        <div
          onClick={control}
          className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
        ></div>
        <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Send message
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="to" className="sr-only">
                  To
                </label>
                <input
                  onChange={handleChanges}
                  value={payload.participant}
                  id="participant"
                  name="participant"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Send to"
                />
                {errors.participant && (
                  <p
                    style={{ marginLeft: 1 }}
                    className="text-red-600 text-xs mt-1"
                  >
                    {errors.participant}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  onChange={handleChanges}
                  value={payload.message}
                  id="message"
                  name="message"
                  type="message"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Message"
                />
                {errors.message && (
                  <p
                    style={{ marginLeft: 1 }}
                    className="text-red-600 text-xs mt-1"
                  >
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                // disabled={conversaction === undefined || errorMessage}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </>
    )
  );
}
