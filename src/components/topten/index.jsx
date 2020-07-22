import React, { useEffect } from 'react'
import { TopTenBar } from "./TopTenBar"
import { TopTenHeader } from "./TopTenHeader"
import { getSubmissions, adminSubmitFlag, adminSubmitVote } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
// import dummy from './dummy.json'

export function TopTenStories() {

    const { hasAdminVoted, hasAdminFlagged, submissions } = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSubmissions())
    }, [])

    // const handleSubmitFlag = () =>{
    //     console.log(submissions);
    //     // dispatch(adminSubmitFlag())
    // }

    const handleSubmitVote = () =>{
        dispatch(adminSubmitVote())
    }

    return (
        <>
            <section className="table-container mx-auto my-5 text-center">
                <table className="table table-striped table-hover">
                    <TopTenHeader />
                    {/* {console.log(users)} */}
                    <tbody>
                        { submissions 
                        ? submissions.map(el => <TopTenBar key={el.id} index={el.id} user={el.user} submission={el} />)
                        : null} 
                        {/* {
                            dummy.map((el, index) =>
                                <TopTenBar 
                                    key={index}
                                    user={el.user}
                                    submission={el}
                                />
                            )
                                
                        } */}
                    </tbody>
                </table>
                <div className="submit-votes-btn d-flex justify-content-end">
                    {/* { hasAdminFlagged ? <button className="btn"></button>: <button className="btn btn-danger px-5 m-2" onClick={ handleSubmitFlag }>Submit Flags</button> } */}
                    { hasAdminVoted ? <button className="btn"></button>: <button className="btn btn-primary px-5 m-2" onClick={ handleSubmitVote }>Submit Votes</button> }
                </div>
            </section>
        </>
    )
}
