import { useEffect, useState } from "react";
import { getArticles } from "../ApiComponent/ArticleApiService";
import ArticleCard from "./ArticleCard";
import NavigationBar from "./NavigationBar";
import { Link } from "react-router-dom";
import Header from "./Header";


export default function ArticlesList () {
    const articlesToShowAtStart = 3
    const [maxArticlesToShow, setMaxArticlesToShow] = useState(articlesToShowAtStart)
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((articlesApi) => {
            const articlesFromAPI = articlesApi.articles;
            setArticles(articlesFromAPI);
        }).catch((error) => {
            console.error("Error fetching articles:", error);
            });
    }, [])

    if (!articles) {
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        );
    }

    const handleLoadMore = () => {
        const additionalArticlesToShow = 3
        setMaxArticlesToShow(maxArticlesToShow + additionalArticlesToShow)
    }

    //articles is coming from line where setArticles() from state
    const limitedArticles = articles.slice(0, maxArticlesToShow)


    return(
        <div>
        <Header/>
        <div>
            <ul>
                {limitedArticles.map((article) => {
                    return (
                        <li className="article-item" key={article.article_id}>
                            <Link to={`/article-details/${article.article_id}`}>
                                <ArticleCard article={article}/>
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