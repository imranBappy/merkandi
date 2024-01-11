"use client";
import { useState } from 'react';
import { SlCalculator } from "react-icons/sl";

const Price = ({ amount, currency }) => {
  const exchangeRates = {
    "USD": 1,
    "EUR": 0.92,
    "JPY": 149.54,
    "TRY": 28.70,
    "KES": 151.55,
    "BDT": 110.21
  };

    const convertPrice = (targetCurrency) => {
    if (!exchangeRates || !exchangeRates[targetCurrency] || !exchangeRates[currency]) {
      console.error(`Exchange rate not available for ${targetCurrency}`);
      return amount;
    }

    // Skip the conversion for the specified currency
    if (targetCurrency === currency) {
      return amount;
    }

    const convertedPrice = (amount / exchangeRates[currency]) * exchangeRates[targetCurrency];
    return convertedPrice.toFixed(2); // You can adjust the decimal places as needed
  };

  const [showPrice, setShowPrice] = useState(false);

  return (
    <div>
        <div className='flex items-end gap-1'>
            <button
                onClick={() => setShowPrice(!showPrice)}
            >
                <SlCalculator fontSize={25} className={`${showPrice ? 'rotate-[360deg] transition duration-1000 ease-in-out' : ''}`} />
            </button>
            <h2 className='text-rose-500 text-2xl font-semibold leading-6'>{currency} {amount}</h2>
            <p className='text-sm text-[#969696]'>/kilogram</p>
            <p className='text-sm text-green-600 font-semibold'>price excl. VAT</p>
        </div>
        <div className={`${showPrice ? 'block divide-y delay-200' : 'hidden'}`}>
            {Object.keys(exchangeRates).map((targetCurrency) => (
                targetCurrency !== currency && (
                <p className='py-2 text-sm' key={targetCurrency}>
                    <b className='mr-2'>{targetCurrency}:</b>
                    {convertPrice(targetCurrency)}
                </p>
                )
            ))}
        </div>
    </div>
  );
};

export default Price;

