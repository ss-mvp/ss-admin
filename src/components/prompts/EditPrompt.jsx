import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AxiosWithAuth } from '../../utils'

export default function EditPrompt(props, eachPrompt) {

    const { id, prompt } = eachPrompt
    const [updatedPrompt, setUpdatedPrompt] = useState({
        prompt: prompt
    })

    const history = useHistory()

    const handleChange = e => {
        setUpdatedPrompt({...updatedPrompt, [e.target.name]: e.target.value })
        console.log(updatedPrompt)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        await AxiosWithAuth().put(`prompts/${id}`, updatedPrompt)
        history.push("/topten")
    }

    return (
            <div className="modal fade" id={`editPrompt${id}`} tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="title bg-primary text-white">
                            <h4 className="p-3">Edit Prompt</h4>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={ handleSubmit }>
                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        name="prompt"
                                        value={updatedPrompt.prompt}
                                        id={id}
                                        rows="10"
                                        onChange={ handleChange }
                                    />
                                    <button type="submit" className="btn btn-primary px-5 m-3">Edit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}
