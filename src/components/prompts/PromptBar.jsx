import React from 'react'
import DeletePrompt from './DeletePrompt'
import EditPrompt from './EditPrompt'

export default function PromptBar() {
    return (
        <>
            <tr>
                <td>This is a Prompt</td>
                <td>
                    <button className="btn btn-outline-primary m-2 px-4" data-toggle="modal" data-target="#editPrompt">Edit</button>
                    <EditPrompt />
                    <button className="btn btn-primary m-2 px-4" data-toggle="modal" data-target="#deleteModal">Delete</button>
                    <DeletePrompt />
                </td>
            </tr>
        </>
    )
}
