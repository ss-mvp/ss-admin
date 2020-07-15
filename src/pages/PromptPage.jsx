import React from 'react'
import { NavBar, Prompts } from '../components'

export function PromptPage(props) {
    return (
        <>
            <NavBar>
                <h3>Prompt</h3>
            </NavBar>
            <Prompts props={props}/>
        </>
    )
}
