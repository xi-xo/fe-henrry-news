import { useState } from "react"
import { postComment } from "../ApiComponent/ArticleApiService"


export default function CommentAdder({ articleId, updateComments}) {
    const [newComment, setNewComment] = useState("")
    const [newSusername, setNewUsername] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        postComment(articleId, { username: newSusername, body: newComment  })
        .then(() => {
            updateComments({ username: newSusername, body: newComment })
        })
        setNewComment("")
        setNewUsername("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" 
                value={newSusername}
                onChange={(e) => {setNewUsername(e.target.value)}}/>
            </div>
            <div>
                <label htmlFor="comment">Comments</label>
                <textarea  id="comment" cols="30" rows="5"
                value={newComment}
                onChange={(e) => {setNewComment(e.target.value)}}
                ></textarea>
            </div>
            <button>Add</button>
        </form>
    )
}