import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import logo from '../assets/logo.svg';

const Component = () => {
    const [inputs, setInput] = useState({
        password: '',
        password2: '',
        email: '',
    });

    const changeInput = ({ target }) => {
        const { name, value } = target;
        setInput((prev) => ({ ...prev, [name]: value }));
    };

    const setAuth = () => {
        localStorage.setItem('user', inputs.email);
    };

    const { password, password2, email } = inputs;
    const disabled = !email || !password || password !== password2;
    const isAuth = localStorage.getItem('user');

    return isAuth ? (
        <Redirect to="/user" />
    ) : (
        <div>
            <img src={logo} alt="" />
            <input
                type="text"
                placeholder="E-mail"
                value={email}
                name="email"
                onChange={changeInput}
            />
            <input
                type="password"
                value={password}
                onChange={changeInput}
                name="password"
                placeholder="Password"
            />
            <input
                type="password"
                value={password2}
                onChange={changeInput}
                name="password2"
                placeholder="Password Confirm"
            />
            <Link to="/scan">
                <button type="button" disabled={disabled} onClick={setAuth}>
                    Register
                </button>
            </Link>
        </div>
    );
};

export default Component;
