import React, { useState, useEffect } from 'react'
import { TopTenBar } from "./TopTenBar"
import { TopTenHeader } from "./TopTenHeader"
import { AxiosWithAuth } from '../../utils';
import dummy from './dummy.json'

export function TopTenStories() {

    const [stories, setStories] = useState([]);
    const [users, setUsers] = useState([]);
    const [allVotes, setAllVotes] = useState([])

    useEffect(() => {
        AxiosWithAuth()
        .get('admin/users')
        .then(response => {
            console.log('users', response)
            setUsers(response.data.users);
        })
        .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        AxiosWithAuth()
        .get('admin/winners')
        .then(response => {
            console.log('submissions', response)
            setStories(response.data.subs);
        })
        .catch(err => console.log(err));
    }, [])

    return (
        <>
            <section className="table-container mx-auto my-5 text-center">
                <table className="table table-striped table-hover">
                    <TopTenHeader />
                    {/* {console.log(users)} */}
                    <tbody>
                        {users && stories 
                        ? stories.map((el, ind) => {
                            const user = users.filter(element => element.id === el.userId)
                            return <TopTenBar key={ind} user={user} submission={el} /> 
                        })
                        : null}
                        {
                            dummy.map(el =>
                                <TopTenBar 
                                    userId={el.id}
                                    key={el.id}
                                    username={el.username}
                                    status={el.status}
                                    allVotes={allVotes}
                                    setAllVotes={setAllVotes}/>
                            )
                                
                        }
                    </tbody>
                </table>
                <div className="submit-votes-btn d-flex justify-content-end">
                    <button className="btn btn-primary px-5">Submit Votes</button>
                </div>
            </section>
        </>
    )
}
