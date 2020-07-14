import React, { useState, useEffect } from 'react'
import plus from '../../assets/plus.svg'
import PromptBar from './PromptBar'
import PromptHeader from './PromptHeader'
import AddPrompt from './AddPrompt'
import { AxiosWithAuth } from '../../utils'

export function Prompts() {
    
    const [ prompts, setPrompts ] = useState([])

    useEffect(async()=> {
        try{
            const res = await AxiosWithAuth().get("/upload/")
            setPrompts(res.data)
        } catch(err){
            console.log(err)
        }
    }, [])
    
    return (
        <>
            <section className="prompts table-container mx-auto text-center">
                <div className="float-right m-3 text-primary">
                    <button type="button" className="btn btn-light" data-toggle="modal" data-target="#addPrompt">
                        <img src={plus} alt="add circle" />
                    </button>
                </div>
                <AddPrompt />
                <table className="table table-striped">
                    <PromptHeader />
                    <tbody>
                        {
                            prompts.map(el => <PromptBar eachPrompt={ el }/>)
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}
