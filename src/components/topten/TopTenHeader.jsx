import React from 'react'

export function TopTenHeader() {
    return (
        <>
            <thead>
                <tr>
                    {
                        ["User", "Status", "Vote"].map((el, ind) => <th key={ind}>{el}</th>)
                    }
                </tr>
            </thead>
        </>
    )
}