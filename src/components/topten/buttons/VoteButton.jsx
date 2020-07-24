import React from 'react'
import { useDispatch } from 'react-redux'
import { adminVote, adminUnvote } from '../../../redux/actions'

export default function VoteButton({ story_id, user_id, vote, hasAdminVoted }) {

    const dispatch = useDispatch()

    const handleVote = () => {
        dispatch(adminVote({ story_id, user_id }))
    }

    const handleUnvote = () => {
        dispatch(adminUnvote({ story_id, user_id }))
    }

    return (
        <div>
            { !hasAdminVoted && !vote && <button id={`toVoted${story_id}`} className='btn btn-primary m-2 px-4' onClick={handleVote}> Vote </button> }
            { !hasAdminVoted && vote && <button id={`unVoted${story_id}`} className='btn btn-success m-2 px-4' onClick={handleUnvote}> Unvote </button> }
            { hasAdminVoted && vote && <button id={`vote${story_id}`} className='btn btn-success m-2 px-4' disabled> Voted </button> }
            { hasAdminVoted && !vote && <button id={`vote${story_id}`} className='btn btn-mute m-2 px-4' disabled>Vote </button> }
        </div>
    )
}
