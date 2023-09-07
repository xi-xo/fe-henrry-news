import { useState } from "react";
import { patchVote } from "../ApiComponent/ArticleApiService";

export default function VotePatch({ article }) {
    const [votes, setVotes] = useState(article.votes);
    const [isVoting, setIsVoting] = useState(false);
    const [voteError, setVoteError] = useState(null);

    const updateVote = () => {
        const updatedArticle = { ...article };
        updatedArticle.votes++;
        setVotes(updatedArticle.votes);
        patchVote(updatedArticle.article_id)
        .then(() => {
            setIsVoting(true);
        })
        .catch((error) => {
            setVoteError("Failed to vote. Please try again.");
            setIsVoting(false);
        });
    };

    return (
        <div>
            <p>{votes}</p>
            <p>Current Votes</p>
            <button onClick={updateVote} disabled={isVoting}
            >Like</button>
            {voteError && <p>Error: {voteError}</p>}
        </div>
    )
}