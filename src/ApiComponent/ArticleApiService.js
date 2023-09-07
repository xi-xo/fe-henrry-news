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

export const getComments = () => {
    return ncNewsApi.get("/comments")
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

export const patchVote = (articleId, voteType) => {
    const requestData = {
        vote_type: voteType
    };

    return ncNewsApi.patch( `/articles/${articleId}`, { newVote: 1 })
    .then((data) => {
        console.log(data);
        return data
    }).catch((error) => {
        throw error;
    });
}