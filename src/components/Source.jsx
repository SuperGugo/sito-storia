export default function Source({ link, image }) {
    return (
        <>
            <div className="mr-5 inline-flex w-64 h-48 items-center justify-center shrink-0 shadow">
                <a target="_blank" href={`${link}`}><img alt="" src={`${image}`} className="h-48 w-64 rounded-xl" /></a>
            </div>
        </>
    )
}