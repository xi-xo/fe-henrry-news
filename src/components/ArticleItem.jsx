import { useParams, Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import { getArticlesById } from "../ApiComponent/ArticleApiService";
import { useEffect, useState } from "react";
import CommentsList from "../CommentsList";
import Header from "./Header";

export default function ArticleItem () {
    const { articleId } = useParams(); 
    const [articles, setArticles] = useState({})
    const article = articles.article

    useEffect(() => {
        getArticlesById(articleId)
        .then((fetchedArticle) => {
            setArticles(fetchedArticle)
        })
    }, [articleId])

    if (!article) {
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        );
    }
    return (
        <>

        <div>
            <Header/>
            <h2>{article.title}</h2>
            <p>posted on: {article.created_at}</p>
            {article.article_img_url && <img className="articleItem-img" src={article.article_img_url} alt={article.title} />}
            <p>{article.body}</p>
            <p>author: {article.author}</p>
        </div>

        <div>
            <h2>Comments</h2>
            <ul>
                <CommentsList/>
            </ul>
        </div>
        </>
    )

}