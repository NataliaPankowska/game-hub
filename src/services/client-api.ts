import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '40129c270cc440f5a4b440260caed501'
    }
})