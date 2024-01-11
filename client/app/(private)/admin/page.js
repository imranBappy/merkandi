import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import AdminBer from "@/components/admin/AdminBer";
import Link from "next/link";
import { BiShoppingBag } from "react-icons/bi";

function Admin() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto py-4 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-3/12">
            <AdminBer />
          </div>
          <div className="w-full md:w-9/12 pl-0 md:pl-6">
            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4">
              <div className="block bg-[#00c292] text-center px-2 py-4 text-white hover:shadow-lg">
                <Link
                  href="/admin"
                  className="text-3xl font-medium flex justify-center gap-2"
                >
                  <BiShoppingBag />
                  3538
                </Link>
                <p className="text-white">Total Products</p>
              </div>
              <div className="block bg-[#03a9f3] text-center px-2 py-4 text-white hover:shadow-lg">
                <Link
                  href="/admin"
                  className="text-3xl font-medium flex justify-center gap-2"
                >
                  <BiShoppingBag />
                  3538
                </Link>
                <p className="text-white">UnApporve Products</p>
              </div>
              <div className="block bg-[#fec107] text-center px-2 py-4 text-white hover:shadow-lg">
                <Link
                  href="/admin"
                  className="text-3xl font-medium flex justify-center gap-2"
                >
                  <BiShoppingBag />
                  3538
                </Link>
                <p className="text-white">Out Of Stock Products</p>
              </div>
              <div className="block bg-[#e46a76] text-center px-2 py-4 text-white hover:shadow-lg">
                <Link
                  href="/admin"
                  className="text-3xl font-medium flex justify-center gap-2"
                >
                  <BiShoppingBag />
                  3538
                </Link>
                <p className="text-white">Reject Products</p>
              </div>

              <div className="block bg-white p-2 hover:shadow-lg">
                <b className="mb-3 block">Total Orders</b>
                <Link
                  href="/admin"
                  className="text-3xl font-medium flex items-center justify-between gap-2"
                >
                  <BiShoppingBag className="text-rose-500" />
                  3538
                </Link>
              </div>
              <div className="block bg-white p-2 hover:shadow-lg">
                <b className="mb-3 block">Pending Orders</b>
                <Link
                  href="/admin"
                  className="text-3xl font-medium flex items-center justify-between gap-2"
                >
                  <BiShoppingBag className="text-rose-500" />
                  3538
                </Link>
              </div>
              <div className="block bg-white p-2 hover:shadow-lg">
                <b className="mb-3 block">Complete Orders</b>
                <Link
                  href="/admin"
                  className="text-3xl font-medium flex items-center justify-between gap-2"
                >
                  <BiShoppingBag className="text-rose-500" />
                  3538
                </Link>
              </div>
              <div className="block bg-white p-2 hover:shadow-lg">
                <b className="mb-3 block">Cancel Orders</b>
                <Link
                  href="/admin"
                  className="text-3xl font-medium flex items-center justify-between gap-2"
                >
                  <BiShoppingBag className="text-rose-500" />
                  3538
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Admin;
