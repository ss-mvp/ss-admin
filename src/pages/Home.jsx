import React from 'react'
import { LoginForm } from '../components'

export function Home(props) {
    return (
        <> 
            <div className="container-sm text-center d-flex flex-column justify-content-center">
                <h1 className="ss-title text-primary">Story Squad</h1>
                <h3>Admin Login</h3>
                <LoginForm props={ props }/>
            </div>
        </>
    )
}
