import axios from 'axios'

const KEY ='AIzaSyCBk8Faeh9nGj90Ci5g5Mc4Kmg9pmVOavQ'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})