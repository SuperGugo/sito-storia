export default function Navbar({ title, img }) {
    return (
        <header className="sticky top-0 z-50 w-full bg-[#CCB98E] outline-solid outline-[#3b2f1e] outline-4 rounded-b-xl shadow-2xl">
            <div className="mx-0 flex max-w-7xl justify-between px-0 py-3">

                <div className="flex items-center gap-3">
                    <img src={img} alt="4CIN" className="h-12 w-12  sepia rounded-3xl"/>
                    <h1 className=" cursor-default text-4xl font-titles text-black  sm:block">{title}</h1>
                </div>
                <nav>
                    <ul className="flex items-center gap-6 text-black font-titles text-xl ">
                        
                        <li>    
                            <a href="" className="  transition-colors hover:underline decoration-[#2b1d0e]">Crediti</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
