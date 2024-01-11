import Breadcrumb from "@/components/Breadcrumb";
// import ProductBox from "@/components/ProductBox";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <>
      <div className="z-0 bg-[url('/bg-seller.jpg')] bg-no-repeat bg-cover h-[120px] relative flex flex-col">
        <div className="bg-black opacity-70 absolute inset-0 z-0"></div>
        <Breadcrumb
          paths={[
            { label: "Home", link: "/" },
            { label: "Category", link: "/category" },
            { label: "Current Page", link: null },
          ]}
        />
      </div>
      <div className="max-w-screen-xl mx-auto my-1 md:px-8">
        <div className="flex flex-col md:flex-row items-start my-4 p-2 bg-white">
          <div className="w-full md:w-3/12">
            <Profile />
          </div>
          <div className="w-full md:w-9/12 pl-0 md:pl-6">
            <div className="grid md:grid-cols-3 grid-cols-2 gap-3">
              {/* <ProductBox
                            link="/details"
                            title="Children's Clothing Mix: George, F&F, Nutmeg, TU, Disney and more" 
                            price={99.99}
                            pricetag="piece"
                            stock="10 pc"
                            level="Premium"
                            images={["/images/1.webp"]}
                            offer="Week's best offer"
                        /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
