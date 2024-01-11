import React from 'react';

const CompanyRegistation = () => {
    return (
      <>
        <div className="flex">
          <div className="w-full md:w-2/4 p-2 pt-0">
            <label className="w-full required mb-1">Company</label>
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
            <label className="w-full required mb-1">Street, unit</label>
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
    );
};

export default CompanyRegistation;