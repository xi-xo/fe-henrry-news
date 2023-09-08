import { useEffect, useState } from "react";
import { getComments } from "../ApiComponent/ArticleApiService";
import CommentAdder from "./CommentAdder";
import { useParams } from "react-router-dom";

export default function Comments() {
    const { articleId } = useParams()
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments(articleId).then((res) => {
            const commentsFromApi = res.data;
            setComments(commentsFromApi);
        })
    }, [articleId])

    const updateComments = (comment) => {
        getComments(articleId).then(() => {
            setComments((currentComments) => {
                return [comment, ...currentComments]
            })
        })
    }

    return (
        <section>
            <CommentAdder updateComments={updateComments} articleId={articleId}/>

        </section>
    )
}