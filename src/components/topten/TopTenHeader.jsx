import React from 'react'

export function TopTenHeader({ votes }) {
    return (
        <>
            <thead>
                <tr>
                    {
                        ["User", "Status", `${votes.length} votes`].map((el, ind) => <th key={ind}>{el}</th>)
                    }
                </tr>
            </thead>
        </>
    )
}