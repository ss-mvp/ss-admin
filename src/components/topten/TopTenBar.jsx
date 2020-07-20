import React, { useState } from 'react'
import StoryModal from './StoryModal'
import { AxiosWithAuth } from '../../utils';

export function TopTenBar(props) {

    const [id] = useState(props.submission.id);
    const [flagged, setFlagged] = useState(false);

    const handleSubmit = e => {
        AxiosWithAuth()
        .post(`admin/flag/${id}/?flagged=${flagged}`)
        .then(() => {
            setFlagged(!flagged);
            flagged ? console.log('it got unflagged') : console.log('it got flagged')
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <tr>
                {console.log(props.user)}
                <td>{props.user[0].username}</td>
                <td>Status</td>
                <td>
                    <button className="btn btn-outline-primary m-2 px-4" data-toggle="modal" data-target="#storyModal">View</button>
                    <StoryModal submission={props.submission} />
                    <button className="btn btn-primary m-2 px-4">Vote</button>
                    {flagged
                    ? <button type="submit" onClick={handleSubmit} id={id} className="btn btn-primary m-2 px-4">Un-Flag</button>
                    :<button type="submit" onClick={handleSubmit} id={id} className="btn btn-danger m-2 px-4">Flag</button>}
                </td>
            </tr>
        </>
    )
}
