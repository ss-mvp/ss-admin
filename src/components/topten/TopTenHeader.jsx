import React from 'react'

export function TopTenHeader() {
    return (
        <>
            <thead>
                <tr>
                    {
                        ["User", "Status", "Vote"].map(el => <th>{el}</th>)
                    }
                </tr>
            </thead>
        </>
    )
}