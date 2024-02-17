import Image from "next/image";
import Link from "next/link";

const Register1 = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:px-8 -mt-28 z-10 relative">
      <table className="w-full text-center">
        <colgroup>
          <col />
          <col className="text-center border-[6px] border-[#f29d00] bg-white" />
          <col />
        </colgroup>
        <tbody>
          <tr className="bg-transparent">
            <td className="bg-transparent p-4"></td>
            <td className="bg-[#fff8ec] p-4"></td>
            <td className="bg-transparent p-4"></td>
          </tr>
          <tr className="bg-white">
            <td className="p-4">
              <div className="flex items-center space-x-4">
                <Image
                  src="images/ratings-green.svg"
                  alt=""
                  width={100}
                  height={100}
                />
                <div className="text-left">
                  <p className="font-bold text-green-500 text-2xl mb-4">
                    99% <span>Satisfied users</span>
                  </p>
                  <p>
                    Effectiveness of Lot24 confirmed by users from all over the
                    world
                  </p>
                </div>
              </div>
            </td>
            <td className="text-center bg-[#fff8ec] p-4">
              <div className="relative py-2">
                <span className="zoom-fade-in-out absolute inset-x-0 -top-16 flex justify-center bg-white text-[#0a6ebd] p-1 rounded">
                  85% of customers choose this package!
                </span>
                <h1 className="mt-2 text-4xl font-bold">PREMIUM</h1>
                <div className="my-2">
                  <p className="text-gray-400 line-through text-2xl mb-3">
                    EUR 279.00
                    <small className="text-muted font-normal">+VAT</small>
                  </p>
                  <span className="mb-2 inline-block bg-red-500 text-white py-1 px-3 rounded">
                    -20%
                  </span>
                  <br />
                  <span className="text-red-500 text-2xl font-bold">
                    EUR 223.20
                  </span>
                  <small className="text-gray-400 ml-1 text-sm">
                    +VAT / 1 year
                  </small>
                </div>
                <p className="text-sm text-gray-400 mb-3">
                  These are net prices, which are subject to VAT rate in line
                  with EU directive.
                </p>
                <Link href="/register/create?plan=premium">
                  <p className="bg-yellow-500 text-white w-full py-2 px-4 mt-2 block text-center rounded">
                    Register
                  </p>
                </Link>
              </div>
            </td>
            <td className="text-center p-4">
              <h2 className="mt-2 text-4xl font-bold">STANDARD</h2>
              <div className="my-2">
                <p className="text-gray-400 line-through text-2xl mb-3">
                  EUR 199.00
                  <small className="text-muted font-normal">+VAT</small>
                </p>
                <span className="mb-2 inline-block bg-red-500 text-white py-1 px-3 rounded">
                  -20%
                </span>
                <br />
                <span className="text-red-500 text-2xl font-bold">
                  EUR 159.20
                </span>
                <small className="text-gray-400 ml-1 text-sm">
                  +VAT / 1 year
                </small>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                These are net prices, which are subject to VAT rate in line with
                EU directive.
              </p>
              <Link href="/register/create?plan=standard">
                <p className="border border-yellow-500 text-yellow-500 w-full py-2 px-4 mt-2 block text-center rounded">
                  Register
                </p>
              </Link>
            </td>
          </tr>

          <tr className="bg-transparent">
            <td className="p-5 text-left">Access period</td>
            <td className="p-5 bg-[#ffeed2]">12 months</td>
            <td className="p-5 bg-[#ffeed2]">12 months</td>
          </tr>
          <tr className="bg-white">
            <td className="p-5 border-b border-gray-300 text-left text-xl uppercase font-bold">
              International purchases
            </td>
            <td className="p-5 border-b border-gray-300"></td>
            <td className="p-5 border-b border-gray-300"></td>
          </tr>
          <tr className="bg-transparent">
            <td className="p-5 text-left">
              Unlimited number of inquiries to send.
            </td>
            <td className="p-5 bg-[#ffeed2]">
              <svg
                className="text-center inline"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1"
                viewBox="0 0 48 48"
                enableBackground="new 0 0 48 48"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  fill="#43A047"
                  points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
                ></polygon>
              </svg>
            </td>
            <td className="p-5">
              <svg
                className="text-center inline"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1"
                viewBox="0 0 48 48"
                enableBackground="new 0 0 48 48"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  fill="#43A047"
                  points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
                ></polygon>
              </svg>
            </td>
          </tr>
          <tr className="bg-transparent">
            <td className="p-5 text-left bg-white">
              Access to the wholesalers contact details.
            </td>
            <td className="p-5 bg-[#fff8ec]">
              <svg
                className="text-center inline"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1"
                viewBox="0 0 48 48"
                enableBackground="new 0 0 48 48"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  fill="#43A047"
                  points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
                ></polygon>
              </svg>
            </td>
            <td className="p-5 bg-white">
              <svg
                className="text-center inline"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1"
                viewBox="0 0 48 48"
                enableBackground="new 0 0 48 48"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  fill="#43A047"
                  points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
                ></polygon>
              </svg>
            </td>
          </tr>
          <tr className="bg-transparent">
            <td className="p-5 text-left">
              Unlimited number of inquiries to send.
            </td>
            <td className="p-5 bg-[#ffeed2]">
              <svg
                className="text-center inline"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1"
                viewBox="0 0 48 48"
                enableBackground="new 0 0 48 48"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  fill="#43A047"
                  points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
                ></polygon>
              </svg>
            </td>
            <td className="p-5">
              <svg
                className="text-center inline"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1"
                viewBox="0 0 48 48"
                enableBackground="new 0 0 48 48"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  fill="#43A047"
                  points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
                ></polygon>
              </svg>
            </td>
          </tr>
          <tr className="bg-transparent">
            <td className="p-5 text-left bg-white">
              Access to the wholesalers contact details.
            </td>
            <td className="p-5 bg-[#fff8ec]">
              <svg
                className="text-center inline"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1"
                viewBox="0 0 48 48"
                enableBackground="new 0 0 48 48"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  fill="#43A047"
                  points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
                ></polygon>
              </svg>
            </td>
            <td className="p-5 bg-white">
              <svg
                className="text-center inline"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1"
                viewBox="0 0 48 48"
                enableBackground="new 0 0 48 48"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  fill="#43A047"
                  points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
                ></polygon>
              </svg>
            </td>
          </tr>
          <tr className="bg-transparent">
            <td className="p-5 text-left">
              Unlimited number of inquiries to send.
            </td>
            <td className="p-5 bg-[#ffeed2]">
              <svg
                className="text-center inline"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1"
                viewBox="0 0 48 48"
                enableBackground="new 0 0 48 48"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  fill="#43A047"
                  points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
                ></polygon>
              </svg>
            </td>
            <td className="p-5">
              <svg
                className="text-center inline"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1"
                viewBox="0 0 48 48"
                enableBackground="new 0 0 48 48"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  fill="#43A047"
                  points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
                ></polygon>
              </svg>
            </td>
          </tr>
          <tr className="bg-transparent">
            <td className="p-5 text-left bg-white">
              Access to the wholesalers contact details.
            </td>
            <td className="p-5 bg-[#fff8ec]">
              <svg
                className="text-center inline"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1"
                viewBox="0 0 48 48"
                enableBackground="new 0 0 48 48"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  fill="#43A047"
                  points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
                ></polygon>
              </svg>
            </td>
            <td className="p-5 bg-white">
              <svg
                className="text-center inline text-red-500"
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                  fill="currentColor"
                ></path>
              </svg>
            </td>
          </tr>
          <tr className="bg-white">
            <td className="p-5 border-b border-gray-300 text-left text-xl uppercase font-bold"></td>
            <td className="p-5 border-b border-gray-300">
              <div className="my-2">
                <p className="text-gray-400 line-through text-2xl mb-3">
                  EUR 279.00
                  <small className="text-muted font-normal">+VAT</small>
                </p>
                <span className="mb-2 inline-block bg-red-500 text-white py-1 px-3 rounded">
                  -20%
                </span>
                <br />
                <span className="text-red-500 text-2xl font-bold">
                  EUR 223.20
                </span>
                <small className="text-gray-400 ml-1 text-sm">
                  +VAT / 1 year
                </small>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                These are net prices, which are subject to VAT rate in line with
                EU directive.
              </p>
              <Link href="/register/create?plan=premium">
                <p className="bg-yellow-500 text-white w-full py-2 px-4 mt-2 block text-center rounded">
                  Register
                </p>
              </Link>
            </td>
            <td className="p-5 border-b border-gray-300">
              <div className="my-2">
                <p className="text-gray-400 line-through text-2xl mb-3">
                  EUR 199.00
                  <small className="text-muted font-normal">+VAT</small>
                </p>
                <span className="mb-2 inline-block bg-red-500 text-white py-1 px-3 rounded">
                  -20%
                </span>
                <br />
                <span className="text-red-500 text-2xl font-bold">
                  EUR 159.20
                </span>
                <small className="text-gray-400 ml-1 text-sm">
                  +VAT / 1 year
                </small>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                These are net prices, which are subject to VAT rate in line with
                EU directive.
              </p>
              <Link href="/register/create?plan=standard">
                <p className="border border-yellow-500 text-yellow-500 w-full py-2 px-4 mt-2 block text-center rounded">
                  Register
                </p>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Register1;
