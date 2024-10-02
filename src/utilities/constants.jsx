const API_KEY = "AIzaSyCSFl1C8kRkJ1edIVrf8JdNiJgn9wKKJ0c"
export const YOUTUBE_DATA_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_COMMENTS_API  = "https://www.googleapis.com/youtube/v3/commentThreads?key="+API_KEY+"&textFormat=plainText&part=snippet&maxResults=50&videoId="