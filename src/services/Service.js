import axios from "axios";


const jsonplaceholderApiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/eddiehe49/favicons',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
const kratesApiClient = axios.create({
    baseURL: 'https://krat.es/' + process.env.VUE_APP_Krates_ID,
    withCredentials: false,
    headers: {
        'x-api-key': process.env.VUE_APP_Krates_x_api_key,
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
    getKratesFaviconsJson() {
        return kratesApiClient.get('/record/' + process.env.VUE_APP_Krates_record)
    },
    putKratesFaviconsJson(favicons) {
        return kratesApiClient.put('/' + process.env.VUE_APP_Krates_record, favicons)
    },
}