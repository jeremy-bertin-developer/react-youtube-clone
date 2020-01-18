import axios from "axios";

const KEY = "AIzaSyCJmDyIz686t38H-_V49LxrBkVyv5bFrDA";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});