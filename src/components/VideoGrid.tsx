import { VideoCard } from "./VideoCard"

const VIDEOS = [
    {
      thumbnail:"photo.jpg",
      icon:"icon.jpg" ,
      title:"The tailwind css song..." ,
      author:"T-series" ,
      views:40 ,
      timestamp:9
    },
    {
        thumbnail:"photo2.jpg",
        icon:"icon.jpg" ,
        title:"Akhiyaan Gulaab (Song): Shahid Kapoor, Kriti Sanon | Mitraz" ,
        author:"T-series" ,
        views:134 ,
        timestamp:120
    },
    {
        thumbnail:"photo3.jpg",
        icon:"icon.jpg" ,
        title:"Full Song: KHAIRIYAT (BONUS TRACK) | CHHICHHORE" ,
        author:"T-series" ,
        views:100 ,
        timestamp:1460
    },
    {
        thumbnail:"photo4.jpg",
        icon:"icon.jpg" ,
        title:"Vaaste Song: Dhvani Bhanushali, Tanishk Bagchi | Nikhil D" ,
        author:"T-series" ,
        views:150 ,
        timestamp:1825
    }
]


export function VideoGrid()
{
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-items-center ">
            {VIDEOS.map((video)=>{
                return(
                    <VideoCard 
                    thumbnail={video.thumbnail} 
                    icon={video.icon}
                    title={video.title} 
                    author={video.author} 
                    views={video.views} 
                    timestamp={video.timestamp}/>
                )
            })}
        </div>
    )
}