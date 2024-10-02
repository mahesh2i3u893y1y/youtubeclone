import { useEffect, useState } from "react"
import { YOUTUBE_COMMENTS_API } from "../utilities/constants"
import Comment from "./Comment"
import { useSearchParams } from "react-router-dom"


const CommentsContainer = () => {

    const [commentsList,setCommentsList] = useState([])
    const [vidoeId] = useSearchParams()


    useEffect(() =>{
        getCommentsData()
    },[])

    const  getCommentsData = async () =>{
        const data = await fetch(YOUTUBE_COMMENTS_API+vidoeId.get("v"))
        const json = await data.json()
        console.log(json)
        setCommentsList(json.items)
        //console.log(commentsList)
    }
    if(!commentsList) return null;
  return (
    <div className="w-7/12">
        {
            commentsList.map((eachComment) =>(
                <Comment info={eachComment} key={eachComment.id}/>
            ))
        }
    </div>
  )
}

export default CommentsContainer