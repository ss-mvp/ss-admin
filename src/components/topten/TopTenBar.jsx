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
            setFlagged(response.data.flag);
        })
        .catch(err => console.log(err))
    })

    const handleSubmit = () => {
        AxiosWithAuth()
        .post(`admin/flag/${id}/`)
        .then(response => {
            console.log(response.data)
            response.data.flag === 1 ? setFlagged(true) : setFlagged(false)
            response.data.flag === 1 ? console.log('it got unflagged') : console.log('it got flagged')
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <tr>
                <td>{props.user[0].username}</td>
                <td>Status</td>
                <td style={{ marginLeft: '30%', display: 'flex' }}>
                    <button className="btn btn-outline-primary m-2 px-4" data-toggle="modal" data-target="#storyModal">View</button>
                    <StoryModal submission={props.submission} />
                    <VoteButton allVotes={props.allVotes} setAllVotes={props.setAllVotes} user={props.user}/>
                    {flagged
                    ? <button type="submit" onClick={handleSubmit} id={id} className="btn btn-primary m-2 px-4">Un-Flag</button>
                    :<button type="submit" onClick={handleSubmit} id={id} className="btn btn-danger m-2 px-4">Flag</button>}
                </td>
            </tr>
        </>
    )
}
