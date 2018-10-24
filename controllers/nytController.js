const axios = require("axios");
require("dotenv").config();

const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = process.env.APIK;

export default {
    search: (query) => {
        return axios.get(URL + APIKEY + query);
    },
    saveArticle: (articleObject) => {
        return axios.post("./saveArticle", articleObject);
    },
    getSavedArticles: () => {
        return axios.get("./getSavedArticles");
    },
    deletedSavedArticles: (id) => {
        return axios.delete("./deletedSavedArticles", {data: {articleId: id}})
    }
};
