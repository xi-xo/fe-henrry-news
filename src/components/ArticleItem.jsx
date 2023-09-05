import { useParams } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import { getArticlesById } from "../ApiComponent/ArticleApiService";
import { useEffect, useState } from "react";

export default function ArticleItem () {
    const { articleId } = useParams(); 
    const [articles, setArticles] = useState({})
    const article = articles.article
    console.log(article);

    useEffect(() => {
        getArticlesById(articleId)
        .then((fetchedArticle) => {
            setArticles(fetchedArticle)
        })
    }, [articleId])

    if (!article) {
        return (
            <div>
                <h1>Loading...</h1>
                <NavigationBar />
            </div>
        );
    }

    return (
        <div>
            <h1>Single Article one</h1>
            <NavigationBar/>
            <h2>{article.title}</h2>
            <p>posted on: {article.created_at}</p>
            {article.article_img_url && <img src={article.article_img_url} alt="" />}
            <p>{article.body}</p>
            <p>author: {article.author}</p>
            
    
        </div>
    )

}