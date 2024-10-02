import { useEffect,useState } from "react"
import { YOUTUBE_DATA_URL } from "../utilities/constants"
import Video from "./Video"
import { Link } from "react-router-dom"

const VideosContainer = () => {
    const [vidoes,setVideos] = useState([])
    useEffect(() =>{
        getVideos()
    },[])

    const getVideos = async () =>{
        const data = await fetch(YOUTUBE_DATA_URL)
        const json = await data.json()
        setVideos(json.items)
    }
    
    if(vidoes.length === 0) return null;
  return (
    <div className="p-2 m-2 flex flex-wrap">
       {
        vidoes.map((video) =>(
          <Link to={"/watch?v="+video.id} key={video.id}><Video info={video} key={video.id} /></Link> 
        ))
       }
    </div>
  )
}

export default VideosContainer