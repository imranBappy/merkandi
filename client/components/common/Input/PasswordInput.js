'use client'
import React, { useState } from 'react';

const PasswordInput = (
    { error, required, label,placeholder,value,name, onChange, className, style, ...props }
) => {
    const [showPassword, setShowPassword] = useState(true)
    return (
        <div className="relative">
            <div style={{ marginLeft: 1 }} className='flex items-center gap-1 '>
                <p className=' py-1 text-sm  ' >
                    {label}
                </p>
                {
                    required && <p className=' text-xl text-red-600'>*</p>
                }
            </div>
            <div className='flex items-center border'>
                <input
                    
                    type={showPassword ? 'text' : 'password'}
                    onChange={onChange}
                    className=" p-2 w-full outline-0"
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    {...props}

                />
                
                    {showPassword ? (
                        <span onClick={() =>setShowPassword(!showPassword)} className="  p-2 bg-white cursor-pointer text-gray-600">Hide</span>
                    ) : (
                        <span onClick={ () =>setShowPassword(!showPassword)} className="p-2 bg-white cursor-pointer text-gray-600">Show</span>
                    )}
            </div>
            <p style={{ marginLeft: 1 }} className='text-red-600 text-xs mt-1' >{ error}</p>
        </div>
    );
};

export default PasswordInput;