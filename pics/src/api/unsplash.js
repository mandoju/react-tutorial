import axios from 'axios';

export default axios.create({
    baseURL:"https://api.unsplash.com/search/photos", 
      headers: {
        Authorization:
          "Client-ID 0fe94d26a130b65a8eb0472e9312a4eb5d4154edc57e979df81e81460b32bd12"
      }
});