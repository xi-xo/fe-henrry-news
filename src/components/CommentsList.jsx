import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../ApiComponent/ArticleApiService";
import { useParams } from "react-router-dom";

export default function CommentsList () {
    const { articleId } = useParams();
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCommentsByArticleId(articleId)
        .then((commentsFromApi) => {
            setComments(commentsFromApi)
            setIsLoading(false)
        })
        .catch((error) => {
            console.log('Error getting comments', error);
            setIsLoading(false)
        })
    }, [articleId]);
    
    if(isLoading) {
        return (
            <div>
                <h3>Loanding...</h3>
            </div>
        );
    }

    if (!comments || comments.length === 0) {
        return (
            <div>
                <h3>There's not comments for this article</h3>
            </div>
        );
    }

    return (
        <div className="comments-container">
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