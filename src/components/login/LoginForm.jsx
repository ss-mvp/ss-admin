import React, { useState } from 'react'
import { AxiosWithAuth } from '../../utils/AxiosWithAuth'

export function LoginForm({ props }) {

    const [ credentials, setCredential ] = useState({
        username: "",
        password: ""
    })

    const handleChange = e => {
        e.preventDefault()
        setCredential({ ...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await AxiosWithAuth().post("admin/login", credentials)
            localStorage.setItem('token', res.data.token)
            props.history.push("/topten")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <div style={{width: '300px'}} className="form-group d-flex flex-column justify-content-center mx-auto">
                    <label htmlFor="adminUsername">Username</label>
                    <input
                        name="username"
                        type="text"
                        id="adminUsername"
                        onChange = { handleChange }
                    />
                    <label htmlFor="adminPassword">Password</label>
                    <input
                        name="password"
                        type="password"
                        id="adminPassword"
                        onChange = { handleChange }
                    />
                    <button type="submit" className="btn btn-primary my-3">
                        Sign In
                    </button>
                </div>
            </form>
        </>
    )
}
