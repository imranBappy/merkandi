"use client";
import Testimonial from "@/components/Card/TestimonialCard";
import Title from "@/components/Title";
import { useGetTestimonialsQuery } from "@/redux/features/testimonial/testimonialApi";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./style.css";

//Capitalize the TestimonialsPage Component
export default function TestimonialsPage() {
  const LIMIT = 12;
  const [pageCount, setPageCount] = useState(0);

  const { data: testimonialData = {}, refetch } = useGetTestimonialsQuery(
    {
      limit: LIMIT,
      page: pageCount,
    },
    {
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
      refetchOnFocus: true,
    }
  );
  const { testimonials, total = 1 } = testimonialData;

  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    setPageCount(selectedPage, event);
  };

  return (
    <div>
      <Title title="Testimonials" name="" link="" className="px-4 md:px-0" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 max-w-screen-xl mx-auto my-4 md:px-8 px-4">
        {testimonials?.map((testimonial) => (
          <Testimonial
            title={testimonial.review}
            name={testimonial.name}
            key={testimonial._id}
          />
        ))}
      </div>

      <div
        className="flex items-center justify-center"
        style={{ marginBottom: "50px" }}
      >
        <ReactPaginate
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          activeClassName={"active"}
          activeLinkClassName="page-link"
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          previousLinkClassName={"controller-btn"}
          nextLinkClassName={"controller-btn"}
          breakClassName={"page-item"}
          onPageChange={handlePageClick}
          breakLabel="..."
          previousLabel="<<"
          nextLabel=">>"
          pageRangeDisplayed={LIMIT}
          pageCount={Math.ceil(total / LIMIT)}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}
