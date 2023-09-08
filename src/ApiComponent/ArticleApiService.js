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

export const getComments = (articleId) => {
    return ncNewsApi.get(`/articles/${articleId}/comments`)
    .then((data) => {
        return data
    })
}


export const getCommentsByArticleId = (articleId) => {
    return ncNewsApi.get(`/articles/${articleId}/comments`)
    .then(({data}) => {
        return data
    })
}

export const postComment = (articleId, newComment) => {
    console.log(newComment);
    return ncNewsApi.post(`/articles/${articleId}/comments`, newComment)
    .then((res) => {
        return res.data.comment
    })
}
export const patchVote = (articleId, voteType) => {
    const requestData = {
        vote_type: voteType
    };
    
    return ncNewsApi.patch( `/articles/${articleId}`, { newVote: 1 })
    .then((data) => {
        return data
    })
}