import React, { useEffect, useState } from 'react'

export default function VoteButton({ user, allVotes, setAllVotes }) {

    const [isVoted, setVoted] = useState(false)

    useEffect(()=> {
        if (allVotes) {
            if (allVotes.includes(user.id)) {
                setVoted(true)
            } else {
                setVoted(false)
            }
        } else {
            console.log('not there')
        }
        
        console.log(isVoted)
    }, [allVotes, setAllVotes, isVoted, user.id])

    const handleVote = e => {
        if (allVotes) {
            if (allVotes.includes(user.id) === false){
                if (allVotes.length < 3){
                    setAllVotes([...allVotes, e.target.value])
                } else if (allVotes.length === 3) {
                    let new_allVotes = allVotes.shift()
                    console.log(new_allVotes)
                    setAllVotes([...new_allVotes, e.target.value])
                }
            }
        } else {
            setAllVotes([e.target.value]);
            // setVoted(true)
        }
        console.log(allVotes)
    }

    const handleUnvote = e => {
        const new_allVotes = allVotes.filter(el => el !== user.id.toString())
        setAllVotes(new_allVotes)
    }
    
    return (
        <div>
            {
                isVoted ?
                <button
                    id={`toVote${user.id}`}
                    value={user.id}
                    className='btn btn-dark m-2 px-4'
                    // onClick={(e)=> handleUnvote(e)}
                    onClick={handleUnvote}
                    >
                    Vote
                </button>
                :
                <button
                    id={`toVote${user.id}`}
                    value={user.id}
                    className='btn btn-primary m-2 px-4'
                    // onClick={(e)=> handleVote(e)}
                    onClick={handleVote}
                    >
                    Vote
                </button>

            }
        </div>
    )
}
