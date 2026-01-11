export default function Navbar({ title, img }) {
    return (
        <header className="sticky top-0 z-50 w-full bg-[#CCB98E] outline-solid outline-[#3b2f1e] outline-4 rounded-b-xl shadow-2xl px-8">
            <div className="mx-0 flex max-w-7xl justify-between px-0 py-3">

                <div className="flex items-center gap-3">
                    <a href="/"><img src={"/logo.jpg"} alt="4CIN" className="h-12 w-12 mr-2 sepia rounded-3xl"/></a>
                    <h1 className=" cursor-default text-4xl font-titles text-black  sm:block">{title}</h1>
                </div>
          
            </div>
        </header>
    )
}
