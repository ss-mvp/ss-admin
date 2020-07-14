import React from 'react'
import DeletePrompt from './DeletePrompt'
import EditPrompt from './EditPrompt'

export default function PromptBar({ eachPrompt }) {
    return (
        <>
            <tr>
                <td>This is a Prompt</td>
                <td>
                    <button className="btn btn-outline-primary m-2 px-4" data-toggle="modal" data-target="#editPrompt">Edit</button>
                    <EditPrompt id={eachPrompt.id} prompt={eachPrompt.prompt }/>
                    <button className="btn btn-primary m-2 px-4" data-toggle="modal" data-target="#deleteModal">Delete</button>
                    <DeletePrompt id={eachPrompt.id} prompt={eachPrompt.prompt }/>
                </td>
            </tr>
        </>
    )
}
