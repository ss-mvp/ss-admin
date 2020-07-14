import React, { useState } from 'react'
import { AxiosWithAuth } from '../../utils'

export default function EditPrompt({ id, prompt }) {

    const [updatedPrompt, setUpdatedPrompt] = useState({ id: id, prompt: prompt })

    const handleChange = e => {
        setUpdatedPrompt({...updatedPrompt, prompt: e.target.value })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        await AxiosWithAuth().post('/prompts', updatedPrompt)
    }

    return (
            <div className="modal fade" id="editPrompt" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div className="title bg-primary text-white">
                            <h4 className="p-3">Edit Prompt</h4>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={ handleSubmit }>
                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        name="prompt"
                                        value="prompt"
                                        id="updatedPrompt"
                                        rows="10"
                                        onChange={ handleChange }
                                    />
                                    <button type="submit" className="btn btn-primary px-5 m-3">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}
