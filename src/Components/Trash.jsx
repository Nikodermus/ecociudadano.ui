import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { PATH, TRASH_TRANSACTION } from '../utils/constants';

const Component = ({ history }) => {
    const [trash, setTrash] = useState(0);
    const [disabled, setDisabled] = useState(false);

    const addTrash = ({ keyCode }) => {
        if (keyCode === 78) {
            const random = Math.random() * (2 - 0.1) + 0.1;
            setTrash((prev) => (Number(prev) + random).toFixed(1));
        }
    };

    const uploadTrash = async () => {
        setDisabled(true);

        fetch(`${PATH}postTransaction`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                point: trash,
                weight: trash,
                clientId: 1,
                containerId: 1,
            }),
        })
            .then((raw) => raw.json())
            .then((json) => {
                localStorage.setItem(TRASH_TRANSACTION, JSON.stringify(json));
                history.push(`/resume/${Math.floor(trash)}`);
            });
    };

    useEffect(() => {
        document.addEventListener('keydown', addTrash);

        return () => {
            document.removeEventListener('keydown', addTrash);
        };
    }, []);

    return (
        <Fragment>
            <h2>Ingresa el reciclaje</h2>
            <button
                onClick={uploadTrash}
                type="button"
                className="trash__btn"
                disabled={disabled}
            >
                Terminar
            </button>

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
