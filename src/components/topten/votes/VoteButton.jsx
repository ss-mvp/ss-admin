import React from 'react'
import { useDispatch } from 'react-redux'
import { adminVote, adminUnvote } from '../../../redux/actions'

export default function VoteButton({ id, vote }) {

    const dispatch = useDispatch()

    const handleVote = () => {
        dispatch(adminVote(id))
    }

    const handleUnvote = () => {
         dispatch(adminVote(id))
    }

    return (
        <div>
            {console.log(vote)}
            {
                
                vote ?
                <button
                    id={`toVote${id}`}
                    value={id}
                    className='btn btn-dark m-2 px-4'
                    onClick={handleVote}
                    >
                    Vote
                </button>
                :
                <button
                    id={`toVote${id}`}
                    value={id}
                    className='btn btn-primary m-2 px-4'
                    onClick={handleUnvote}
                    >
                    Vote
                </button>
            }
        </div>
    )
}
