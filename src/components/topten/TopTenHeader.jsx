import React from 'react';

export function TopTenHeader({ votes }) {
    return (
        <>
            <thead>
                <tr>
                    {
                        ["User", "Status", `${votes.length} votes`, "Age", "Squad Score"].map((el, ind) => <th key={ind}>{el}</th>)
                    }
                </tr>
            </thead>
        </>
    )
}