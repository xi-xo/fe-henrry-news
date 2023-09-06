import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "./ApiComponent/ArticleApiService";
import { useParams } from "react-router-dom";

export default function CommentsList () {
    const { articleId } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsByArticleId(articleId)
        .then((commentsFromApi) => {
            setComments(commentsFromApi)
        });
    }, [articleId]);

    if (!comments) {
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        );
    }

    return (
        <div className="c">
            {comments.map((comment) => {
                return (
                <li key={comment.comment_id}>
                    <p>{comment.body}</p>
                </li>
                )
            })}
        </div>
    )
}