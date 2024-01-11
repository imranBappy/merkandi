import Image from 'next/image';
import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";

const Feature = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = () => {
    setBoxes([
      ...boxes,
      { name: '', inputFields: [{ icon: null, tax: '', tik: '', text: '' }] },
    ]);
  };

  const removeBox = (boxIndex) => {
    const updatedBoxes = [...boxes];
    updatedBoxes.splice(boxIndex, 1);
    setBoxes(updatedBoxes);
  };

  const addInputField = (boxIndex) => {
    const updatedBoxes = [...boxes];
    updatedBoxes[boxIndex].inputFields = [
      ...updatedBoxes[boxIndex].inputFields,
      { icon: '', tax: '', tik: '', text: '' },
    ];
    setBoxes(updatedBoxes);
  };

  const removeInputField = (boxIndex, fieldIndex) => {
    const updatedBoxes = [...boxes];
    updatedBoxes[boxIndex].inputFields.splice(fieldIndex, 1);
    setBoxes(updatedBoxes);
  };

  const handleIconChange = (boxIndex, fieldIndex, event) => {
    const file = event.target.files[0];

    const updatedBoxes = [...boxes];
    updatedBoxes[boxIndex].inputFields[fieldIndex].icon = file;
    setBoxes(updatedBoxes);
  };

  return (
    <div className="max-w-screen-xl mx-auto md:my-20 my-6 md:px-16 px-2">
        <button
            className='bg-white border px-4 py-2 outline-0'
            onClick={addBox}
        >
            Add Box
        </button>
        {boxes.map((box, boxIndex) => (
            <div key={boxIndex} className="border bg-white p-4 mt-4">
                <div className='flex items-center justify-between mb-4'>
                    <input
                        type="text"
                        placeholder="Box Name"
                        className='p-2 outline-0 border max-w-lg w-full'
                        value={box.name}
                        onChange={(e) => {
                        const updatedBoxes = [...boxes];
                        updatedBoxes[boxIndex].name = e.target.value;
                        setBoxes(updatedBoxes);
                        }}
                    />
                    <button
                        onClick={() => removeBox(boxIndex)}
                    >
                        <IoCloseSharp
                            fontSize={25}
                            className='hover:rotate-[360deg] duration-500 hover:text-rose-500 text-gray-700'
                        />
                    </button>
                </div>
            
                {box.inputFields.map((field, fieldIndex) => (
                    <div key={fieldIndex} className="flex md:items-center items-start md:justify-between">
                        <div className='w-full flex flex-col md:flex-row items-center justify-between gap-4 my-1'>
                            <div className='flex items-center space-x-2 w-full'>
                                <input
                                    type="checkbox"
                                    placeholder="Title"
                                    className='p-2 outline-0 border'
                                    value={field.tik}
                                    onChange={(e) => {
                                    const updatedBoxes = [...boxes];
                                    updatedBoxes[boxIndex].inputFields[fieldIndex].tik =
                                        e.target.value;
                                    setBoxes(updatedBoxes);
                                    }}
                                />
                                <label>
                                    {field.icon ? (
                                    <Image
                                        width={40}
                                        height={40}
                                        src={URL.createObjectURL(field.icon)}
                                        alt="Icon Preview"
                                        className='max-w-20 max-h-20 rounded-md'
                                    />
                                    ) : (
                                    <Image
                                        width={40}
                                        height={40}
                                        src="/plus.svg"
                                        alt="upload"
                                        className='max-w-20 max-h-20'
                                    />
                                    )}
                                    <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleIconChange(boxIndex, fieldIndex, e)}
                                    className='hidden'
                                    />
                                </label>
                                <input
                                    type="text"
                                    placeholder="Title"
                                    className='p-2 outline-0 border w-full'
                                    value={field.tax}
                                    onChange={(e) => {
                                    const updatedBoxes = [...boxes];
                                    updatedBoxes[boxIndex].inputFields[fieldIndex].tax =
                                        e.target.value;
                                    setBoxes(updatedBoxes);
                                    }}
                                />
                            </div>
                            <textarea
                                placeholder="Text"
                                className='p-2 outline-0 border w-full whitespace-pre-line'
                                rows={1}
                                value={field.text}
                                onChange={(e) => {
                                const updatedBoxes = [...boxes];
                                updatedBoxes[boxIndex].inputFields[fieldIndex].text =
                                    e.target.value;
                                setBoxes(updatedBoxes);
                                }}
                            />
                        </div>
                    
                        <button
                            onClick={() => removeInputField(boxIndex, fieldIndex)}
                            className='md:p-2 pt-3'
                        >
                            <IoCloseSharp
                                fontSize={25}
                                className='hover:rotate-[360deg] duration-500 hover:text-rose-500 text-gray-700'
                            />
                        </button>
                    </div>
                ))}
                <button
                    onClick={() => addInputField(boxIndex)}
                    className='bg-white border px-4 py-2 mt-4 outline-0'
                >
                    Add Input Field
                </button>
            </div>
        ))}
    </div>
  );
};

export default Feature;