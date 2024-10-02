/* eslint-disable react/prop-types */


const Comment = ({info}) => {
    
    const {snippet} = info 
    const {topLevelComment} = snippet 
   
    // const likeCountCal = (likeCount) =>{
    //     if(likeCount > 1000){
    //         return (likeCount/1000).toFixed(1) + "k"
    //     }else
    //     {
    //         return likeCount 
    //     }
    // }

  return (
    <div className="flex p-2">
        <img src={topLevelComment.snippet.authorProfileImageUrl} alt="profile" className="w-7 h-7 rounded-full"/>
        <div className="mx-2 ">
            <p className="font-bold text-[14px]">{topLevelComment.snippet.authorDisplayName}</p>
            <p className="text-[14px]">{topLevelComment.snippet.textDisplay}</p>
            
        </div>
    </div>
  )
}

export default Comment