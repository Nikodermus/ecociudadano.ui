import React from 'react';
import { Link } from 'react-router-dom';

const Component = ({ match }) => {
    const { quantity = 1 } = match.params;

    return (
        <div>
            <h1>{`${quantity} Libras`}</h1>
            <h2>Total Reciclaje</h2>
            <ul>
                <li>
                    <p>Carton</p>
                    <small>{`${(quantity * 0.33).toFixed(1)} libra`}</small>
                </li>
                <li>
                    <p>Plastico</p>
                    <small>{`${(quantity * 0.5).toFixed(1)} libra`}</small>
                </li>
                <li>
                    <p>Vidrio</p>
                    <small>{`${(quantity * 0.07).toFixed(1)} libra`}</small>
                </li>
                <li>
                    <p>Tetrapack</p>
                    <small>{`${(quantity * 0.1).toFixed(1)} libra`}</small>
                </li>
            </ul>

            <Link to="/user">
                <button type="button">Ok</button>
            </Link>
        </div>
    );
};

export default Component;
