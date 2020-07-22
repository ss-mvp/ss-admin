import React from 'react'
import { useDispatch } from 'react-redux'
import { adminVote, adminUnvote } from '../../../redux/actions'

export default function VoteButton(props) {

    const dispatch = useDispatch()

    const handleVote = () => {
        console.log('vote', props.submission.id)
        dispatch(adminVote(props.submission.id))
    }

    const handleUnvote = () => {
        console.log('un', props.submission.id)
        dispatch(adminUnvote(props.submission.id))
    }

    return (
        <div>
            {/* {console.log(props.submission.vote)} */}
            {
                
                props.submission.vote ?
                <button
                    id={`unVote${props.submission.id}`}
                    value={props.submission.id}
                    className='btn btn-dark m-2 px-4'
                    onClick={handleUnvote}
                    >
                    Vote
                </button>
                :
                <button
                    id={`toVote${props.submission.id}`}
                    value={props.submission.id}
                    className='btn btn-primary m-2 px-4'
                    onClick={handleVote}
                    >
                    Vote
                </button>
            }
        </div>
    )
}
