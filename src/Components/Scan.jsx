import React, { useEffect, Fragment } from 'react';
import Webcam from 'react-webcam';
import { Link } from 'react-router-dom';

import border from '../assets/cam_border.svg';

const Component = ({ history }) => {
    const nextStep = ({ keyCode }) => {
        if (keyCode === 78) {
            history.push('/trash');
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', nextStep);

        return () => {
            document.removeEventListener('keydown', nextStep);
        };
    }, []);

    return (
        <Fragment>
            <h1 className="scan__title">Escanea tu codigo</h1>
            <div className="scan__bg">
                <Webcam className="scan__cam" />
                <img src={border} alt="" className="scan__border" />
            </div>
            <Link to="/user">
                <button className="scan__btn">Inicio</button>
            </Link>
            <h2 className="scan__sub">Para poder ingresar al reciclaje</h2>
        </Fragment>
    );
};

export default Component;
