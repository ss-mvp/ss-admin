import React, { useState, useEffect } from 'react'
// import plus from '../../assets/plus.svg'
import PromptBar from './PromptBar'
import PromptHeader from './PromptHeader'
import AddPrompt from './AddPrompt'
import { AxiosWithAuth } from '../../utils'

export function Prompts({ props }) {
    
    const [ prompts, setPrompts ] = useState([])

    useEffect(()=> {
        AxiosWithAuth().get("/api/contest/prompts")
            .then(res => {
                setPrompts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    
    return (
        <>
            <section className="prompts table-container mx-auto text-center">
                <div className="float-right m-3 text-primary">
                    <button type="button" className="btn btn-light" data-toggle="modal" data-target="#addPrompt">
                        Add Prompt
                    </button>
                </div>
                <AddPrompt />
                <table className="table table-striped">
                    <PromptHeader prompts={prompts}/>
                    <tbody>
                        {
                            prompts.map((el,ind) => <PromptBar key={el.id} eachPrompt={ el } props={props}/>)
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}
