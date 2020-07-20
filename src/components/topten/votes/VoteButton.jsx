import React, { useEffect, useState } from 'react'

export default function VoteButton({ userId, allVotes, setAllVotes }) {

    const [isVoted, setVoted] = useState(false)

    useEffect(()=> {
        if (allVotes.includes(userId)) {
            setVoted(true)
        } else {
            setVoted(false)
        }
        console.log(isVoted)
    }, [allVotes, setAllVotes])

    const handleVote = e => {
        if (allVotes.includes(userId) === false){
            if (allVotes.length !== 3){
                setAllVotes([...allVotes, e.target.value])
            } else if (allVotes.length === 3) {
                let new_allVotes = allVotes.shift()
                console.log(new_allVotes)
                setAllVotes([...new_allVotes, e.target.value])
            }
        }
        console.log(allVotes)
    }

    const handleUnvote = e => {
        const new_allVotes = allVotes.filter(el => el !== userId.toString())
        setAllVotes(new_allVotes)

    }
    
    return (
        <div>
            {
                isVoted ?
                <button
                    id={`toVote${userId}`}
                    value={userId}
                    className='btn btn-dark m-2 px-4'
                    onClick={(e)=> handleUnvote(e)}
                    >
                    Vote
                </button>
                :
                <button
                    id={`toVote${userId}`}
                    value={userId}
                    className='btn btn-primary m-2 px-4'
                    onClick={(e)=> handleVote(e)}
                    >
                    Vote
                </button>

            }
        </div>
    )
}
