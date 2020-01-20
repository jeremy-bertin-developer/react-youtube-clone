import axios from "axios";

const KEY = "AIzaSyDYddd8OniQmWZN7Fjnh1ni_fZZjTSyokA";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});