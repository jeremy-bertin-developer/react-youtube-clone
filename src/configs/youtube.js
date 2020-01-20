import axios from "axios";

const KEY = "AIzaSyAnDzEfz1q5C_YNQ5P1fadWCo6dFJdOoyc";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});