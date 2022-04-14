import axios from "axios";


const jsonplaceholderApiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/eddiehe49/favicons-json',
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
        "X-Master-Key": "$2b$10$Dr3C03m96HY3V014.oTOf.kh/veUr7PF2tLr7FK/B9v03pstYPCSO",
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
const kratesApiClient = axios.create({
    baseURL: "https://krat.es/258439960bc7d64a1353",
    withCredentials: false,
    headers: {
        "x-api-key": "3c46750c-1795-431e-9bc0-fcfb3a43c856",
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