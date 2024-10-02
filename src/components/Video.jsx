/* eslint-disable react/prop-types */



const Video = ({info}) => {
    const {snippet,statistics} = info
    const {thumbnails,title,channelTitle} = snippet
  return (
    <div className="w-72 m-1 cursor-pointer">
        <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg"/>
        <ul>
            <li className="font-bold text-[15px]">{title}</li>
            <li className="text-[14px]">{channelTitle}</li>
            <li className="text-[14px]">{statistics.viewCount}</li>
           
        </ul>
    </div>
  )
}

export default Video