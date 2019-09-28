import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

import wave from '../assets/wave.svg';

const Component = () => {
    const [trash, setTrash] = useState(0);

    const addTrash = ({ keyCode }) => {
        if (keyCode === 171) {
            const random = Math.random() * (2 - 0.1) + 0.1;
            setTrash((prev) => (Number(prev) + random).toFixed(1));
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', addTrash);

        return () => {
            document.removeEventListener('keydown', addTrash);
        };
    }, []);

    return (
        <Fragment>
            <Link to={`/resume/${Math.floor(trash)}`}>
                <button type="button" className="trash__btn">
                    Terminar
                </button>
            </Link>

            <div
                className="trash__bar"
                style={{ height: `${200 + trash * 20}px` }}
            >
                <h1 className="trash__qty">{`${trash} libras`}</h1>
            </div>
        </Fragment>
    );
};

export default Component;
