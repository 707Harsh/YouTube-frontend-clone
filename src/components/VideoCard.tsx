export function VideoCard({thumbnail,icon,title,author,views,timestamp}:any)
{
    return(
        <div style={{width:'400px'}}>
            <img src={thumbnail} alt="unable to load pic" className="rounded-xl" style={{width:'400px'}}/>
            <div className="grid grid-cols-8 pt-3" >
                <div className="col-span-1">
                    <img src={icon} alt="unable to load icon" className="rounded-full"/>
                </div>
                <div className="col-span-7 pl-4">
                    <p className="font-semibold">{title}</p>
                    <p className="text-slate-300">{author}</p>
                    <p className="text-slate-300">{views}M views | {timestamp} days ago</p>
                </div>
            </div>
        </div>
    )
}