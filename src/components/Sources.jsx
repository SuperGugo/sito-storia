import Source from "./Source";

export default function Sources({ info, whatSource }) {
    return (
        <>
            <div className="w-full bg-gray-800 rounded-xl p-6 col-span-3 mr-45">
                <div className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-lime-400">
                    <div>
                        {info.sources[whatSource].map(info => (
                            <>
                                <Source link={info.link} image={info.image}/>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}


