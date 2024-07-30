const YOUTUBE_API_KEY = "AIzaSyDwlPVw4ukdeeWpAc0YXsw3ptT_CxSuYjw";

export const YOUTUBE_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+YOUTUBE_API_KEY;

export const YOUTUBE_MOVIE_DETAIL_API = "https://youtube.googleapis.com/youtube/v3/videos?part=id%2Cstatistics%2Csnippet&id=[VIDEO_ID]&key="+YOUTUBE_API_KEY