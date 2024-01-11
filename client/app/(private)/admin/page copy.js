import AdminBer from "@/components/admin/AdminBer";

export default function Admin() {
    return (
        <div className="max-w-screen-xl mx-auto my-1 md:px-8">
            <div className="flex flex-col md:flex-row items-start">
                <div className="w-full md:w-3/12">
                    <AdminBer />
                </div>
                <div className='w-full md:w-9/12 pl-0 md:pl-6'>
                    
                </div>
            </div>
        </div>
    )
}