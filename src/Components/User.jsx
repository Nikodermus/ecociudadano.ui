import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PATH, USER } from '../utils/constants';

const Component = () => {
    const [state, setstate] = useState(null);

    useEffect(() => {
        (async () => {
            const raw = await fetch(`${PATH}clientdescription?id=1`);
            setstate(await raw.json());
        })();
    }, []);

    const logout = () => {
        localStorage.removeItem(USER);
    };

    const username = localStorage.getItem(USER);
    const { score, clientId } = state || {};

    return state ? (
        <Fragment>
            <figure className="user__fig">
                <img
                    className="user__img"
                    src={`https://gravatar.com/avatar/${username}`}
                    alt=""
                />
            </figure>
            <h1 className="user__main">{`${localStorage.getItem('user') ||
                'EcoUsuario'}`}</h1>
            <h3>Ciudad</h3>
            <small className="user__title">
                {clientId.dni_city || 'El Mundo'}
            </small>
            <h3>Activo desde</h3>
            <small className="user__title">Hoy</small>
            <h3>Peso reciclado</h3>
            <small className="user__title">{score || 0} Libras</small>
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
    ) : (
        <div className="user__loader">Loading...</div>
    );
};

export default Component;
