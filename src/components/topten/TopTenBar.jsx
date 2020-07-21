import React, { useState, useEffect } from 'react'
import StoryModal from './StoryModal'
import VoteButton from './votes/VoteButton'
import { AxiosWithAuth } from '../../utils';
import { useDispatch } from 'react-redux'
import { adminFlag, adminUnflag } from '../../redux/actions'

export function TopTenBar(props) {

    const [id] = useState(props.submission.id)
    const dispatch = useDispatch()
    
    const handleFlag = () => {
        dispatch(adminFlag(id))
    }

    const handleUnflag = () => {
        dispatch(adminUnflag(id))
    }
    return (
        <>
            <tr>
                <td>{props.user.username}</td>
                <td>Status</td>
                <td>
                    <button className="btn btn-outline-primary m-2 px-4" data-toggle="modal" data-target="#storyModal">View</button>
                    {console.log(props.submission)}
                    <StoryModal submission={props.submission} />
                    <VoteButton />
                    {props.submission.flagged
                    ? <button type="submit" onClick={ handleUnflag } id={ id } className="btn btn-primary m-2 px-4">Un-Flag</button>
                    :<button type="submit" onClick={ handleFlag } id={ id } className="btn btn-danger m-2 px-4">Flag</button>}
                </td>
            </tr>
        </>
    )
}
