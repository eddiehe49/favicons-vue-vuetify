import axios from "axios";


const jsonplaceholderApiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/eddiehe49/favicons',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
const jsonbinApiClient = axios.create({
    baseURL: "https://api.jsonbin.io/v3/b/6247a881d96a510f028f6bfd",
    withCredentials: false,
    headers: {
        "X-Master-Key": "$2b$10$Dr3C03m96HY3V014" + process.env.VUE_APP_X_Master_Key,
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
const kratesApiClient = axios.create({
    baseURL: "https://krat.es/258439960bc7d64a1353",
    withCredentials: false,
    headers: {
        "x-api-key": process.env.VUE_APP_x_api_key,
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getJsonplaceholderFaviconsJson() {
        return jsonplaceholderApiClient.get('/favicons')
    },
    patchJsonplaceholderFaviconsJson(id, avatars) {
        return jsonplaceholderApiClient.patch('/favicons/' + id, avatars)
    },
    getJsonbinFaviconsJson() {
        return jsonbinApiClient.get('/latest')
    },
    putJsonbinFaviconsJson(avatars) {
        return jsonbinApiClient.put('', avatars)
    },
    getKratesFaviconsJson() {
        return kratesApiClient.get("/record/624b08405a015dc4d2223b2f")
    },
    putKratesFaviconsJson(favicons) {
        return kratesApiClient.put('/624b08405a015dc4d2223b2f', favicons)
    },
}