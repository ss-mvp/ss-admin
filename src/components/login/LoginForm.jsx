import React, { useState } from 'react';
import { token } from '../../utils';
import { AxiosWithAuth } from '../../utils/AxiosWithAuth';

export function LoginForm({ props }) {
  const [credentials, setCredential] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    setCredential({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await AxiosWithAuth().post(
        '/api/auth/login?admin=true',
        credentials
      );
      token.set(res.data.token);
      props.history.push('/topten');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          style={{ width: '300px' }}
          className="form-group d-flex flex-column justify-content-center mx-auto"
        >
          <label htmlFor="adminEmail">E-Mail</label>
          <input
            name="email"
            type="text"
            id="adminEmail"
            onChange={handleChange}
          />
          <label htmlFor="adminPassword">Password</label>
          <input
            name="password"
            type="password"
            id="adminPassword"
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary my-3">
            Sign In
          </button>
        </div>
      </form>
    </>
  );
}
