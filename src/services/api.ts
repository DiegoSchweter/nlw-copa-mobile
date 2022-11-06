import axios from 'axios';

export const api = axios.create({
    //baseURL:'d-yo9sw.diegoschweter.mobile.exp.direct:3333'
    //baseURL:'http://192.168.0.187:3333'
    baseURL:'http://localhost:3333'
})