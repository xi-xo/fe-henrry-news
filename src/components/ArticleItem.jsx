import { useParams } from "react-router-dom";
import { getArticlesById } from "../ApiComponent/ArticleApiService";
import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import VotePatch from "./VotePatch";


export default function ArticleItem () {
    const { articleId } = useParams(); 
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        getArticlesById(articleId)
        .then((fetchedArticle) => {
            setArticle(fetchedArticle.article)
            setIsLoading(false)
        })
    }, [articleId])

    if(isLoading) {
        return (
            <div>
                <h3>Loanding...</h3>
            </div>
        );
    }

    if (!article || Object.keys(article).length === 0) {
        return (
            <div>
                <h3>Article not found</h3>
            </div>
        );
    }
    return (
        <>

        <div>
            <h2>{article.title}</h2>
            <p>posted on: {article.created_at}</p>
            {article.article_img_url && <img className="articleItem__article-img" src={article.article_img_url} alt={article.title} />}
            <p>{article.body}</p>
            <p>author: {article.author}</p>
            <VotePatch article={article}/>
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