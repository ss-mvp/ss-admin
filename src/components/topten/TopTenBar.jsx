import React from 'react'
import StoryModal from './StoryModal'

export function TopTenBar(props) {
    return (
        <>
            <tr>
                <td>Username</td>
                <td>Status</td>
                <td>
                    <button className="btn btn-outline-primary m-2 px-4" data-toggle="modal" data-target="#storyModal">View</button>
                    <StoryModal />
                    <button className="btn btn-primary m-2 px-4">Vote</button>
                </td>
            </tr>
        </>
    )
}
