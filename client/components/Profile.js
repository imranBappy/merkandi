import Image from "next/image";
import Link from "next/link";
import { LiaTachometerAltSolid } from "react-icons/lia";

const Profile = () => {
    return (
        <>
        <div className="w-full top-0 sticky md:-mt-20">
            <Link
                href="/wholesales/1"
            >
                <Image
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover border-4 border-white bg-white mb-4"
                    src="/seller.svg"
                    alt="seller"
                    loading="lazy"
                />
            </Link>
            <div className="bg-white border border-[#299bcc] text-black mb-4 flex flex-col">
                <Link
                    href="/"
                    className="text-m p-2 border-b border-[#299bcc] hover:bg-mm hover:text-white flex items-center gap-2"
                >
                    <LiaTachometerAltSolid fontSize={25} />
                    Send a message
                </Link>
                <Link
                    href="/"
                    className="text-m p-2 border-b border-[#299bcc] hover:bg-mm hover:text-white flex items-center gap-2"
                >
                    <LiaTachometerAltSolid fontSize={25} />
                    Call
                </Link>
                <Link
                    href="/wholesales/1/products"
                    className="text-m p-2 border-b border-[#299bcc] hover:bg-mm hover:text-white flex items-center gap-2"
                >
                    <LiaTachometerAltSolid fontSize={25} />
                    All Offers
                </Link>
                <Link
                    href="/wholesales/1/review"
                    className="text-m p-2 hover:bg-mm hover:text-white flex items-center gap-2"
                >
                    <LiaTachometerAltSolid fontSize={25} />
                    give an appraisal
                </Link>
            </div>
        </div>
        </>
    )
}

export default Profile;