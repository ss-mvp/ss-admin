import React, { useState } from 'react'
import { AxiosWithAuth } from '../../utils/AxiosWithAuth'

export default function LoginForm({ props }) {

    const [ credentials, setCredential ] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        e.preventDefault()
        setCredential({ ...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await AxiosWithAuth().post("/auth/login", credentials)
            localStorage.setItem('token', res.token)
            props.history.push("/topten")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <div className="form-group">
                    <label for="adminEmail">Email</label>
                    <input
                        name="email"
                        type="text"
                        id="adminEmail"
                        onChange = { handleChange }
                    />
                    <label for="adminpassword">Admin</label>
                    <input
                        name="password"
                        type="password"
                        id="adminPassword"
                        onChange = { handleChange }
                    />
                    <button type="submit" className="btn btn-primary">
                        Sign In
                    </button>
                </div>
            </form>
        </>
    )
}
