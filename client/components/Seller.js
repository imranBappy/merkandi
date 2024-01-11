import Image from "next/image";
import Link from "next/link";
import {
  BiMap,
  BiMapAlt,
  BiSitemap,
  BiPhone,
  BiBox,
  BiCommentDetail,
} from "react-icons/bi";

function Seller({ store }) {
  const { company, phone, country, about, location, street } = store;

  return (
    <div className="flex flex-col md:flex-row border hover:shadow-lg group bg-white  my-2 p-4">
      <div className="w-full md:w-3/12">
        <Image
          width={300}
          height={300}
          className="w-full h-48 object-cover"
          src={"/seller.svg"}
          alt={company}
          loading="lazy"
        />
      </div>
      <div className="w-full md:w-9/12">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-[70%] md:px-4 py-4 md:pt-0 flex flex-col md:border-r">
            <Link
              href={`/wholesales/${store.user}`}
              className="text-xl font-bold hover:text-mm group-hover:text-mm leading-5"
            >
              {company}
            </Link>
            <div className="flex items-center text-green-600 my-1 text-sm">
              <svg
                className="mr-1"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.03 9.78a.75.75 0 0 0-1.06-1.06l-5.47 5.47-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6-6Z"></path>
                <path d="m14.136 1.2 1.375 1.01c.274.201.593.333.929.384l1.687.259a3.61 3.61 0 0 1 3.02 3.021l.259 1.686c.051.336.183.655.384.929l1.01 1.375a3.61 3.61 0 0 1 0 4.272l-1.01 1.375a2.106 2.106 0 0 0-.384.929l-.259 1.687a3.61 3.61 0 0 1-3.021 3.02l-1.686.259a2.106 2.106 0 0 0-.929.384l-1.375 1.01a3.61 3.61 0 0 1-4.272 0l-1.375-1.01a2.106 2.106 0 0 0-.929-.384l-1.687-.259a3.61 3.61 0 0 1-3.02-3.021l-.259-1.686a2.117 2.117 0 0 0-.384-.929L1.2 14.136a3.61 3.61 0 0 1 0-4.272l1.01-1.375c.201-.274.333-.593.384-.929l.259-1.687a3.61 3.61 0 0 1 3.021-3.02l1.686-.259c.336-.051.655-.183.929-.384L9.864 1.2a3.61 3.61 0 0 1 4.272 0Zm-3.384 1.209-1.375 1.01a3.614 3.614 0 0 1-1.59.658l-1.686.258a2.111 2.111 0 0 0-1.766 1.766l-.258 1.686a3.61 3.61 0 0 1-.658 1.589l-1.01 1.376a2.11 2.11 0 0 0 0 2.496l1.01 1.375c.344.469.57 1.015.658 1.59l.258 1.686c.14.911.855 1.626 1.766 1.766l1.686.258a3.61 3.61 0 0 1 1.589.658l1.376 1.01a2.11 2.11 0 0 0 2.496 0l1.375-1.01a3.613 3.613 0 0 1 1.59-.657l1.686-.26a2.11 2.11 0 0 0 1.766-1.765l.258-1.686a3.61 3.61 0 0 1 .658-1.589l1.01-1.376a2.11 2.11 0 0 0 0-2.496l-1.01-1.375a3.613 3.613 0 0 1-.657-1.59l-.26-1.686a2.11 2.11 0 0 0-1.765-1.766l-1.686-.258a3.61 3.61 0 0 1-1.589-.658l-1.376-1.01a2.11 2.11 0 0 0-2.496 0Z"></path>
              </svg>
              <p className="text-green-600">Verified Seller</p>
            </div>
            <div className="flex items-center my-1 text-sm gap-1">
              <BiMap />
              <p>{country?.name}</p>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center my-1 text-sm gap-1">
                <BiMapAlt />
                <p>{street}</p>
              </div>
              <div className="flex items-center my-1 text-sm gap-1">
                <BiSitemap />
                <p>{location}</p>
              </div>
            </div>
            <div className="flex items-center my-1 text-sm gap-1">
              <BiPhone />
              <Link href={`tel:+${phone}`} target="_blank" className="text-m">
                +{phone}
              </Link>
            </div>
            <p>{about}</p>
          </div>
          <div className="w-full md:w-[30%] flex flex-col justify-center md:pl-4">
            <div className="hidden md:block">
              <div className="flex items-center justify-center my-2 pb-2 text-base gap-1 border-b">
                <BiBox />
                <p>
                  Offers:{" "}
                  <span className="text-white bg-gray-500 px-2">
                    {"213546"}
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-center my-2 text-base gap-1">
                <BiCommentDetail />
                <p>
                  Reviews:{" "}
                  <span className="text-white bg-gray-500 px-2">{"0"}</span>
                </p>
              </div>
            </div>
            <Link
              href="/"
              className="w-full p-2 bg-m hover:bg-mm text-white text-center mb-2"
            >
              Product catalog
            </Link>
            <Link
              href="/"
              className="w-full p-2 border-[#299bcc] border hover:bg-m hover:text-white text-center"
            >
              Product catalog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seller;
