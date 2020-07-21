import React, { useState, useEffect } from 'react'
import StoryModal from './StoryModal'
import VoteButton from './votes/VoteButton'
import { AxiosWithAuth } from '../../utils';

export function TopTenBar(props) {

    const [id] = useState(props.submission.id);
    const [flagged, setFlagged] = useState(undefined);

    useEffect(() => {
        AxiosWithAuth()
        .get(`admin/flag/${id}/`)
        .then(response => {
            if (response.data === 1) {
                setFlagged(true)
            } else {
                setFlagged(false)
            }
        })
        .catch(err => console.log(err))
    }, [])

    const handleFlag = () => {
        AxiosWithAuth()
        .post(`admin/flag/${id}/`)
        .then(response => {
            setFlagged(true)
        })
        .catch(err => console.log(err))
    }

    const handleUnflag = () => {
        AxiosWithAuth()
        .delete(`admin/flag/${id}/`)
        .then(response => {
            setFlagged(false)
        })
        .catch(err => console.log(err))
    }


    return (
        <>
            <tr>
                <td>{props.user[0].username}</td>
                <td>Status</td>
                <td>
                    <button className="btn btn-outline-primary m-2 px-4" data-toggle="modal" data-target="#storyModal">View</button>
                    {console.log(props.submission)}
                    <StoryModal submission={props.submission} />
                    <VoteButton />
                    {flagged
                    ? <button type="submit" onClick={ handleUnflag } id={ id } className="btn btn-primary m-2 px-4">Un-Flag</button>
                    :<button type="submit" onClick={ handleFlag } id={ id } className="btn btn-danger m-2 px-4">Flag</button>}
                </td>
            </tr>
        </>
    )
}
