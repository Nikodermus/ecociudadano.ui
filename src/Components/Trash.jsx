import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        <div>
            <p>{`${trash} libras`}</p>
            <Link to={`/resume/${Math.floor(trash)}`}>
                <button type="button">Terminar</button>
            </Link>
        </div>
    );
};

export default Component;
