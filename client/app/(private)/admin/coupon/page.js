"use client";
import AdminBer from "@/components/admin/AdminBer";
import AddCoupon from "@/components/Coupon/AddCoupon";
import CouponTable from "@/components/Coupon/CouponTable";
import TestimonialTable from "@/components/Testimonial/TestimonialTable";

export default function TestimonialPage() {
  const handleEdit = (item) => {};

  return (
    <div className="max-w-screen-xl mx-auto my-1 md:px-8">
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/12">
          <AdminBer />
        </div>
        <div className="w-full md:w-9/12 pl-0 md:pl-6">
          <div className="flex flex-col  items-start mt-3">
            <div className="w-full  pr-0 md:mr-8">
              <h1 className="text-md font-semibold mb-2 block">
                Create New Coupon
              </h1>
              <AddCoupon />
            </div>
            <div className="w-full ">
              <div>
                <CouponTable handleEdit={handleEdit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
