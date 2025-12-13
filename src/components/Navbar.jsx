export default function Navbar({ title }) {
    return (
        <div className='col-span-3 sticky top-0 h-22 w-full flex justify-center items-center bg-gray-600 rounded-b-xl'>
            <p className='text-4xl'>{title}</p>
        </div>
    )
}
