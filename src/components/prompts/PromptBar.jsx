import React from 'react'
import DeletePrompt from './DeletePrompt'
import EditPrompt from './EditPrompt'

export default function PromptBar(props, eachPrompt) {
    return (
        <>
            <tr>
                <td>{ props.eachPrompt.prompt }</td>
                <td>
                    <button className="btn btn-outline-primary m-2 px-4" data-toggle="modal" data-target={`#editModal${props.eachPrompt.id}`}>Edit</button>
                    <EditPrompt key={`e${props.eachPrompt.id}`} eachPrompt={props.eachPrompt} props={props.props}/>
                    <button className="btn btn-primary m-2 px-4" data-toggle="modal" data-target={`#deleteModal${props.eachPrompt.id}`}>Delete</button>
                    <DeletePrompt key={`d${props.eachPrompt.id}`} eachPrompt={props.eachPrompt} props={props.props}/>
                </td>
            </tr>
        </>
    )
}
