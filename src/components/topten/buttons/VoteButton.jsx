import React from 'react'
import { useDispatch } from 'react-redux'
import { adminVote, adminUnvote } from '../../../redux/actions'

export default function VoteButton({ story_id, user_id, vote, topThree, hasAdminVoted }) {

    const dispatch = useDispatch()

    const handleVote = () => {
        dispatch(adminVote({ story_id, user_id }))
    }

    const handleUnvote = () => {
        dispatch(adminUnvote({ story_id, user_id }))
    }

    return (
        <div>
            { vote && <button id={`unVote${story_id}`} className='btn btn-success m-2 px-4' onClick={handleUnvote}> Voted </button> }
            { !hasAdminVoted && !vote && <button id={`toVote${story_id}`} className='btn btn-primary m-2 px-4' onClick={handleVote}>Vote </button> }
            { hasAdminVoted && !topThree && !vote && <button id={`voted${story_id}`} className='btn btn-muted m-2 px-4' disabled> Voted </button> }
        </div>
    )
}
