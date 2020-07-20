import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AxiosWithAuth } from '../../utils'

export default function EditPrompt(props, eachPrompt) {

    const { id, prompt } = props.eachPrompt
    const [updatedPrompt, setUpdatedPrompt] = useState({
        prompt: prompt
    })

    const history = useHistory()

    const handleChange = e => {
        setUpdatedPrompt({...updatedPrompt, [e.target.name]: e.target.value })
        console.log(updatedPrompt)
    }

    const handleSubmit = async(e) => {
        await AxiosWithAuth().put(`upload/edit/${id}`, updatedPrompt)
        history.push("/prompts")
    }

    return (
            <div className="modal fade" id={`editModal${id}`} tabindex="-1" role="dialog">
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
