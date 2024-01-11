// components/PhotoGallery.js
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PhotoGallery({ photos, image, isLoading }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({
    url: "",
    _id: "",
  });

  useEffect(() => {
    setCurrentImage(image);
  }, [image]);

  const handleImageClick = (img) => {
    setCurrentImage(img);
  };

  const nextImage = () => {
    const index = photos.findIndex((photo) => photo._id === currentImage._id);
    setCurrentImage(photos[(index + 1) % photos.length]);
  };

  const prevImage = () => {
    const index = photos.findIndex((photo) => photo._id === currentImage._id);
    setCurrentImage(photos[(index - 1 + photos.length) % photos.length]);
  };

  return !isLoading ? (
    <div className="">
      <Image
        src={currentImage?.url}
        alt=""
        width={600}
        height={600}
        className={`cursor-pointer col-span-4 w-full`}
        onClick={() => setIsOpen(true)}
      />

      <div className=" flex overflow-x-auto ">
        {photos.map((photo, index) => (
          <Image
            className="cursor-pointer border-2 border-gray-200 flex-grow "
            key={index}
            src={photo.url}
            alt=""
            width={100}
            height={100}
            onClick={() => handleImageClick(photo, index)}
          />
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="relative">
            <Image src={currentImage?.url} alt="" width={600} height={600} />
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2"
              onClick={prevImage}
            >
              Prev
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2"
              onClick={nextImage}
            >
              Next
            </button>
            <button
              className="absolute top-0 right-0 bg-red-500 p-2 text-white "
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className="border hover:shadow-lg group bg-white block">
      <div className="animate-pulse">
        <div className="bg-slate-200 h-72 w-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-3">
          <div className="bg-slate-200 h-24 w-full"></div>
          <div className="bg-slate-200 h-24 w-full"></div>
          <div className="bg-slate-200 h-24 w-full"></div>
          <div className="bg-slate-200 h-24 w-full"></div>
        </div>
      </div>
    </div>
  );
}
