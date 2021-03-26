import axios from "axios";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";


export default {
    install (Vue) {
        Vue.prototype.axios = axios;
        Vue.prototype.base_url = BASE_URL;
    }
}