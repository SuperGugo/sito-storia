export default function Source({ link, image }) {
    return (
        <>
            <div className="mb-5 mr-5 inline-flex w-64 h-40 items-center justify-center shrink-0 shadow">
                <a target="_blank" href={`${link}`}><img alt="" src={`${image}`} className="h-40 w-64 rounded-xl" /></a>
            </div>
        </>
    )
}