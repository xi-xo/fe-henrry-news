export default function ArticleCard ({article}) {
    return (
        <div>
            <h3>{article.title}</h3>
            <img src={article.article_img_url} alt="" />
        </div>
    )

}