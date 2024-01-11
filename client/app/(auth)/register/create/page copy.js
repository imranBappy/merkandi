"use client";
import { useState, useEffect } from "react";
import { BiCheck } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function Register() {
  useEffect(() => {
    const url = window.location.href;
    const type = new URL(url).searchParams.get("type");

    if (type === "premium") {
      const premiumElement = document.getElementById("premium");
      premiumElement.style.display = "block";
    } else if (type === "standard") {
      const standardElement = document.getElementById("standard");
      standardElement.style.display = "block";
    }
  }, []);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <>
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="flex flex-col md:flex-row my-8">
          <div className="w-full md:w-2/3 bg-white mr-0 md:mr-6 p-6">
            <div className="black mb-4 pb-4 border-b">
              <h1 className="w-full md:w-72 text-lg font-semibold mb-3">
                Basic information
              </h1>
              <p>* All fields marked with an asterisk (*) are required</p>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between">
              <h1 className="w-full md:w-3/12 text-md font-semibold">
                Basic information
              </h1>
              <div className="block space-y-3">
                <div className="flex">
                  <div className="w-full md:w-2/4 p-2 pt-0">
                    <label className="w-full required mb-1">Name</label>
                    <input
                      className="w-full p-1 border outline-0 dark:bg-gray-600 dark:text-white"
                      type="text"
                      name="name"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full md:w-2/4 p-2 pt-0">
                    <label className="w-full required">Surname</label>
                    <input
                      className="w-full p-1 border outline-0 dark:bg-gray-600 dark:text-white"
                      type="text"
                      name="name"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="w-full md:w-2/4 p-2">
                    <label className="w-full required mb-1">
                      Email address
                    </label>
                    <input
                      className="w-full p-1 border outline-0 dark:bg-gray-600 dark:text-white"
                      type="text"
                      name="name"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full md:w-2/4 p-2">
                    <label className="w-full required">Password</label>
                    <input
                      className="w-full p-1 border outline-0 dark:bg-gray-600 dark:text-white"
                      type="text"
                      name="name"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="w-full md:w-2/4 p-2">
                    <label className="w-full">&nbsp;</label>
                    <div className="relative w-full border outline-0">
                      <select
                        className="appearance-none outline-0 w-full py-1 px-2 bg-white"
                        name="whatever"
                        id="frm-whatever"
                      >
                        <option value="1">piece</option>
                        <option value="2">truck</option>
                        <option value="3">tonne</option>
                        <option value="4">set</option>
                        <option value="5">Refurbished</option>
                        <option value="6">Used</option>
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
                  <div className="w-full md:w-2/4 p-2">
                    <label className="w-full">Phone number</label>
                    <input
                      className="w-full p-1 border outline-0 dark:bg-gray-600 dark:text-white"
                      type="text"
                      name="name"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/4 p-2">
                  <label className="w-full required">Country</label>
                  <div className="relative w-full border outline-0">
                    <select
                      className="appearance-none outline-0 w-full py-1 px-2 bg-white"
                      name="whatever"
                      id="frm-whatever"
                    >
                      <option value="1">piece</option>
                      <option value="2">truck</option>
                      <option value="3">tonne</option>
                      <option value="4">set</option>
                      <option value="5">Refurbished</option>
                      <option value="6">Used</option>
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
                <div className="flex items-center p-2">
                  <input
                    className="border outline-0 h-5 w-5 mr-2"
                    type="checkbox"
                    name="name"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label className="block">I register as a company</label>
                </div>
                <div className="md:flex flex-col p-2">
                  {isChecked && (
                    <>
                      <div className="flex">
                        <div className="w-full md:w-2/4 p-2 pt-0">
                          <label className="w-full required mb-1">
                            Company
                          </label>
                          <input
                            className="w-full p-1 border outline-0 dark:bg-gray-600 dark:text-white"
                            type="text"
                            name="name"
                            placeholder=""
                          />
                        </div>
                        <div className="w-full md:w-2/4 p-2 pt-0">
                          <label className="w-full required text-xs leading-2">
                            EU Tax number or company registration number
                          </label>
                          <input
                            className="w-full p-1 border outline-0 dark:bg-gray-600 dark:text-white"
                            type="text"
                            name="name"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-full md:w-2/4 p-2">
                          <label className="w-full required mb-1">
                            Street, unit
                          </label>
                          <input
                            className="w-full p-1 border outline-0 dark:bg-gray-600 dark:text-white"
                            type="text"
                            name="name"
                            placeholder=""
                          />
                        </div>
                        <div className="w-full md:w-2/4 p-2">
                          <label className="w-full required">Postal code</label>
                          <input
                            className="w-full p-1 border outline-0 dark:bg-gray-600 dark:text-white"
                            type="text"
                            name="name"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-2/4 p-2">
                        <label className="w-full required mb-1">City</label>
                        <input
                          className="w-full p-1 border outline-0 dark:bg-gray-600 dark:text-white"
                          type="text"
                          name="name"
                          placeholder=""
                        />
                      </div>
                    </>
                  )}
                </div>
                <div className="flex p-2">
                  <label className="">NEGOTIABLE</label>
                  <input
                    className="border outline-0 border-slate-400 rounded h-5 w-5"
                    type="checkbox"
                    name="name"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div id="premium" style={{ display: "none" }}>
              <div className="border bg-white p-4 space-y-1">
                <h6 className="text-y font-semibold uppercase">PREMIUM</h6>
                <del className="text-[#969696] text-md notranslate text-line-through">
                  EUR 279.00
                  <small className="text-muted font-normal">+VAT</small>
                </del>
                <span className="bg-rose-500 text-white">-20%</span>
                <br />
                <span className="text-2xl font-semibold uppercase">
                  EUR 223.20
                  <small className="text-[#969696] font-normal">+VAT</small>
                </span>
                <small className="text-[#969696]">/ 1 year</small>
                <p className="small text-[#969696]">
                  These are net prices, which are subject to VAT rate in line
                  with EU directive.
                </p>

                <p className="inline-flex">
                  <BiCheck className="fill-green-500" fontSize={30} />
                  Unlimited number of inquiries to send.
                </p>
                <p className="inline-flex">
                  <BiCheck className="fill-green-500" fontSize={30} />
                  Access to the wholesalers contact details.
                </p>
                <p className="inline-flex">
                  <BiCheck className="fill-green-500" fontSize={30} />
                  Daily newsletter with the latest offers.
                </p>
                <p className="inline-flex">
                  <BiCheck className="fill-green-500" fontSize={30} />
                  Offers from 150 countries, up to 90% off regular prices.
                </p>
                <p className="inline-flex">
                  <BiCheck className="fill-green-500" fontSize={30} />
                  Possibility to publish purchase offers
                </p>
                <p className="inline-flex">
                  <BiCheck className="fill-green-500" fontSize={30} />
                  An account to manage your settings, contacts and offers.
                </p>
                <p className="inline-flex">
                  <BiCheck className="fill-green-500" fontSize={30} />
                  Access to the opinions about the wholesalers.
                </p>
                <p className="inline-flex">
                  <BiCheck className="fill-green-500" fontSize={30} />
                  Access to the blacklist of wholesalers.
                </p>
                <p className="inline-flex">
                  <BiCheck className="fill-green-500" fontSize={30} />
                  Listing unlimited number of offers- after a positive
                  verification of your company
                </p>
                <p className="inline-flex">
                  <BiCheck className="fill-green-500" fontSize={30} />
                  Promoting your offers all across Europe.
                </p>
                <p className="inline-flex">
                  <BiCheck className="fill-green-500" fontSize={30} />
                  Listing your company in Merkandi international catalogue.
                </p>
                <p className="inline-flex">
                  <BiCheck className="fill-green-500" fontSize={30} />
                  Creation of a multilingual profile of your company
                </p>
                <p className="inline-flex">
                  <BiCheck className="fill-green-500" fontSize={30} />
                  Advanced statistics of your offers and your companys profile
                  views.
                </p>
                <p className="inline-flex">
                  <BiCheck className="fill-green-500" fontSize={30} />
                  Import/Export offers to CSV, XLS, XML files.
                </p>
                <p className="inline-flex">
                  <BiCheck className="fill-green-500" fontSize={30} />
                  The assistance of personal adviser.
                </p>
              </div>
            </div>
            <div id="standard" style={{ display: "none" }}>
              <div className="border bg-white p-4 space-y-1">
                <h6 className="text-y font-semibold uppercase">STANDARD</h6>
                <del className="text-[#969696] text-md notranslate text-line-through">
                  EUR 199.00
                  <small className="text-muted font-normal">+VAT</small>
                </del>
                <span className="bg-rose-500 text-white">-20%</span>
                <br />
                <span className="text-2xl font-semibold uppercase">
                  EUR 159.20
                  <small className="text-[#969696] font-normal">+VAT</small>
                </span>
                <small className="text-[#969696]">/ 1 year</small>
                <p className="small text-[#969696]">
                  These are net prices, which are subject to VAT rate in line
                  with EU directive.
                </p>
                <p className="inline-flex">
                  <BiCheck className="fill-green-500" fontSize={30} />
                  Unlimited number of inquiries to send.
                </p>
                <p className="inline-flex">
                  <BiCheck className="fill-green-500" fontSize={30} />
                  Access to the wholesalers contact details.
                </p>
                <p className="inline-flex">
                  <BiCheck className="fill-green-500" fontSize={30} />
                  Daily newsletter with the latest offers.
                </p>
                <p className="inline-flex">
                  <BiCheck className="fill-green-500" fontSize={30} />
                  Offers from 150 countries, up to 90% off regular prices.
                </p>
                <p className="inline-flex">
                  <BiCheck className="fill-green-500" fontSize={30} />
                  Possibility to publish purchase offers
                </p>
                <p className="inline-flex">
                  <BiCheck className="fill-green-500" fontSize={30} />
                  An account to manage your settings, contacts and offers.
                </p>
                <p className="inline-flex">
                  <AiOutlineClose
                    className="fill-rose-500 mr-1"
                    fontSize={20}
                  />
                  Access to the opinions about the wholesalers.
                </p>
                <p className="inline-flex">
                  <AiOutlineClose
                    className="fill-rose-500 mr-1"
                    fontSize={20}
                  />
                  Access to the blacklist of wholesalers.
                </p>
                <p className="inline-flex">
                  <AiOutlineClose
                    className="fill-rose-500 mr-1"
                    fontSize={20}
                  />
                  Listing unlimited number of offers- after a positive
                  verification of your company
                </p>
                <p className="inline-flex">
                  <AiOutlineClose
                    className="fill-rose-500 mr-1"
                    fontSize={20}
                  />
                  Promoting your offers all across Europe.
                </p>
                <p className="inline-flex">
                  <AiOutlineClose
                    className="fill-rose-500 mr-1"
                    fontSize={20}
                  />
                  Listing your company in Merkandi international catalogue.
                </p>
                <p className="inline-flex">
                  <AiOutlineClose
                    className="fill-rose-500 mr-1"
                    fontSize={20}
                  />
                  Creation of a multilingual profile of your company
                </p>
                <p className="inline-flex">
                  <AiOutlineClose
                    className="fill-rose-500 mr-1"
                    fontSize={20}
                  />
                  Advanced statistics of your offers and your companys profile
                  views.
                </p>
                <p className="inline-flex">
                  <AiOutlineClose
                    className="fill-rose-500 mr-1"
                    fontSize={20}
                  />
                  Import/Export offers to CSV, XLS, XML files.
                </p>
                <p className="inline-flex">
                  <AiOutlineClose
                    className="fill-rose-500 mr-1"
                    fontSize={20}
                  />
                  The assistance of personal adviser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
