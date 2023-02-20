import { useRouter } from "next/router"
import { localData } from "@/data/data"
const MovieDetails =()=>{
    const router = useRouter()
    const videoId = Number(router.query.movieId)

if(videoId){
    let singleVideo = localData.filter(video => {
        return video.id === videoId
    })
    console.log("videoId: ", singleVideo);
}
    
    
    return (
        <div>
            this is the details page and
        </div>
    )
}


export default MovieDetails