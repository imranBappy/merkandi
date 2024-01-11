import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";
import Image from "next/image";
import Link from "next/link";

function MobileCategoryMenu() {
  const { data } = useGetCategoriesQuery();
  return (
    <>
      <div className="md:hidden block">
        <div className="bg-[url('/images/top-bg.jpg')]">
          <div className="flex flex-col items-center space-y-6 justify-between max-w-screen-xl mx-auto py-4 md:px-8">
            <div className="flex wrap items-center">
              <Image
                src="/images/thunder.svg"
                width={30}
                height={30}
                alt="Picture of the author"
                className="mr-2"
              />
              <h1 className="text-white text-3xl font-extrabold leading-8">
                FLASH SALE
              </h1>
            </div>
            <div className="flex items-center justify-center bg-[#05006e] py-4 w-full">
              <h1 className="text-5xl text-white font-bold leading-4 mr-6">
                15
              </h1>
              <span className="text-white text-lg font-normal">
                Number of remaining
                <br />
                packages
              </span>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-[#ff0000] px-3 py-1 text-center zoom-fade-in-out mr-4">
                <h1 className="text-white text-xl font-extrabold leading-8">
                  -20%
                </h1>
              </div>
              <Link
                href="/dashboard"
                className="flex items-center bg-[#f29d00] hover:bg-[#cc8400] text-white p-3 font-normal text-lg uppercase leading-3"
              >
                Register
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 32 32"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M 9.09375 4.78125 L 7.6875 6.21875 L 17.46875 16 L 7.6875 25.78125 L 9.09375 27.21875 L 20.3125 16 Z M 16.09375 4.78125 L 14.6875 6.21875 L 24.46875 16 L 14.6875 25.78125 L 16.09375 27.21875 L 27.3125 16 Z"></path>
                </svg>
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-lg text-center text-white font-extrabold leading-6 mb-1">
                For one-year REGISTRATION and RENEWAL{" "}
              </h1>
              <span className="text-white text-xs">
                promotions cannot be combined
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full bg-[#1f8ebe] p-4">
          <h1 className="text-lg text-center text-white font-bold leading-6 mb-1">
            Merkandi - #1 wholesale trading platform since 2008
          </h1>
          <span className="text-white text-center text-sm font-light">
            On the wholesale market of liquidation stocks, surplus stocks and
            bankrupt stocks
          </span>
        </div>

        <div className="flex items-center justify-center bg-white mb-3">
          <Link href="/login" className="text-[#212529] p-3 border-r">
            Wholesalers
          </Link>
          <Link href="/login" className="text-[#212529] p-3 border-r">
            Products
          </Link>
          <Link href="/login" className="text-[#212529] p-3">
            Bankrupt stocks
          </Link>
        </div>

        <div className="grid grid-cols-4 bg-white mb-3">
          {data?.categories.map((item) => (
            <Link
              key={item?._id}
              href={`/shop?category=${item?._id}`}
              className="text-[#969696] p-2 flex flex-col items-center
                    justify-center text-center  hover:text-[#212529] 
                    transition duration-300 ease-in-out
                    border-r border-[#969696]
                  "
            >
              <Image
                src={item?.image?.url}
                width={30}
                height={30}
                alt="Picture of the author"
                className="mb-1 w-10 h-10 object-contain  rounded-full "
              />
              {item?.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
export default MobileCategoryMenu;
