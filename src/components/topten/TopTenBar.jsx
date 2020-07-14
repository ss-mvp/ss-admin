import React from 'react'

export function TopTenBar(props) {
    return (
        <>
            <tr>
                <td>username</td>
                <td>Status</td>
                <td>
                    <button className="btn btn-outline-primary m-2 px-4">View</button>
                    <button className="btn btn-primary m-2 px-4">Vote</button>
                </td>
            </tr>
        </>
    )
}
