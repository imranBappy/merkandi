import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center my-10 '>
            <div className='w-full md:w-1/4'>
                <Image
                    src="/images/404.svg"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                    className="mr-2"
                />
            </div>
            <div className='w-full md:w-5/12 md:pb-0 pb-10'>
                <h2 className='text-[#969696] text-3xl md:text-left text-center'>ERROR 404</h2>
                <h2 className='text-black text-4xl font-bold md:text-left text-center'>
                We are sorry, the page does not exist.
                </h2>
                <p className='text-xl font-normal mt-3 inline-block md:text-left text-center'>
                We couldnt find the site, that you are searching for, sorry. Please click the button from below , to go back to the homepage, and then try again.
                </p>
                <Link className='bg-mm text-white py-2 px-4 mt-4 md:inline-block block text-center' href="/">Back to home</Link>
            </div>
        </div>
    )
}