import React, { useState } from 'react';
import { AxiosWithAuth } from '../utils';
import { useHistory } from 'react-router-dom';
import { NavBar } from '../components'

export const Video = () => {

    const [link, setLink] = useState({
        link: ''
    });
    const history = useHistory();

    const handleLinkChange = e => {
        setLink({link: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        // AxiosWithAuth().post('http://localhost:5000/admin/video', link)
        AxiosWithAuth().post('admin/video', link)
        .then(() => {
            history.push('/topten')
        })
        .catch(err => console.log(err.message))
    }

    return (
        <>
        <NavBar>
            <h3>Video</h3>
        </NavBar>
        <div className="card" style={{margin: '10% auto', width: "25rem" }}>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input name='link' onChange={handleLinkChange} value={link.link} className="form-control form-control-lg" type="text" placeholder="YouTube Link" />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}