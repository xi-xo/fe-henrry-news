import { useState, useEffect } from "react";
import { patchVote } from "../ApiComponent/ArticleApiService";

export default function VotePatch({ article }) {
    const [votes, setVotes] = useState();
    const [isVoting, setIsVoting] = useState(false);
    const [voteError, setVoteError] = useState(null);


    useEffect(() => {
        setVotes(article.votes);
    }, [article.votes])
    const updateVote = () => {
        const currVotes = article.votes
        article.votes++
        setVotes(article.votes);
        patchVote(article.article_id)
        .then(() => {
            setIsVoting(true);
        })
        .catch((error) => {
            setVotes(currVotes)
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