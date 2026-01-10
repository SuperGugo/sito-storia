import Source from "./Source";

export default function Sources({ info, whatSource }) {
    return (
        <>
            <div className=" bg-[#f2ead3] border-4 border-[#3b2f1e4d] p-6 col-span-3 rounded-3xl m-5 ">
                <div className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-lime-400 ">
                    <div>
                        {info.sources[whatSource].map((info, index) => (
                                <Source key={index} link={info.link} image={info.image}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}


