import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '273a4ef3d83a43ab80f479f115b46202'
    }
})