import axios from 'axios';
const KEY = "AIzaSyDjOycS-jeE1BH6_0n8lO02dmADd2EbRPo";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY,
        type: 'video'
    }
});