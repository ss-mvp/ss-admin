import React from 'react'

export default function Home(props) {
    return (
        <>
            <NavBar>
                <h3>Admin Login</h3>
            </NavBar>
            <LoginForm props={ props }/>
        </>
    )
}
