import axios from "axios";

const ncNewsApi = axios.create({ baseURL: "https://henrry-news.onrender.com/api" })

export const getArticles = () => {
    return ncNewsApi.get("/articles")
    .then(({data}) => {
        return data;
    })
}

export const getArticlesById = (articleId) => {
    return ncNewsApi.get(`/articles/${articleId}`)
    .then(({data}) => {
        return data;
    })

}