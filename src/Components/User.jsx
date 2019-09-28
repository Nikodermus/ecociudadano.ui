import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Component = () => {
    const logout = () => {
        localStorage.removeItem('user');
    };

    return (
        <Fragment>
            <Link to="/scan">
                <button className="user__btn" type="button">
                    Escanea
                </button>
            </Link>
            <Link to="/">
                <button className="user__btn" type="button" onClick={logout}>
                    Logout
                </button>
            </Link>
        </Fragment>
    );
};

export default Component;
