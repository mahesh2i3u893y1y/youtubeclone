import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { collapseMenu } from "../utilities/appSlice"
import { useSearchParams } from "react-router-dom"
import CommentsContainer from "./CommentsContainer"

const Watch = () => {

    const [searchParams] = useSearchParams();

    //console.log(searchParams.get("v"))

    const dispatch = useDispatch()
     useEffect(() =>{
        dispatch(collapseMenu())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <div className="px-5 py-2">
      <div className="m-1 w-10/12">
        <iframe className="w-9/12 h-[400px]" src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
        title="YouTube video player" frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
        gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen></iframe>
      </div>
      <CommentsContainer/>
    </div>
  )
}

export default Watch