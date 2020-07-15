import React from 'react'

export default function PromptHeader({ prompts }) {
    return (
        <>
            <thead>
                <tr>
                    <th scope="col">Prompt</th>
                    <th scope="col">{ prompts.length } Prompts</th>
                </tr>
            </thead>
        </>
    )
}
