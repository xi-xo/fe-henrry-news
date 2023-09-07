import { useEffect, useState } from "react";
import { getArticles } from "../ApiComponent/ArticleApiService";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";


export default function ArticlesList() {
    const articlesToShowAtStart = 3
    const [maxArticlesToShow, setMaxArticlesToShow] = useState(articlesToShowAtStart)
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getArticles().then((articlesApi) => {
            const articlesFromAPI = articlesApi.articles;
            setArticles(articlesFromAPI);
        }).then(() => {
            setLoading(false)
        })
    }, [])

    if (loading) {
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        );
    }

    if (!articles || articles.length === 0) {
        return (
            <div>
                <h3>No articles available.</h3>
            </div>
        );
    }

    const handleLoadMore = () => {
        const additionalArticlesToShow = 3
        setMaxArticlesToShow(maxArticlesToShow + additionalArticlesToShow)
    }

    //articles is coming from line where setArticles() from state
    const limitedArticles = articles.slice(0, maxArticlesToShow)


    return (
        <div>
            <div>
                <ul>
                    {limitedArticles.map((article) => {
                        return (
                            <li className="article-item" key={article.article_id}>
                                <Link to={`/article-details/${article.article_id}`}>
                                    <ArticleCard article={article} />
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {maxArticlesToShow < articles.length && (<button onClick={handleLoadMore}>Load More</button>)}
        </div>
    )

}