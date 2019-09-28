import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Component = ({ match }) => {
    const { quantity = 1 } = match.params;

    return (
        <Fragment>
            <h1 className="resume__title">{`${quantity} Libra${
                Number(quantity) === 1 ? '' : 's'
            }`}</h1>
            <h2 className="resume__sub">Total Reciclaje</h2>
            <ul className="resume__list">
                <li className="resume__item">
                    <p className="resume__type">Carton</p>
                    <small className="resume__qty">{`${(
                        quantity * 0.33
                    ).toFixed(1)} libras`}</small>
                </li>
                <li className="resume__item">
                    <p className="resume__type">Plastico</p>
                    <small className="resume__qty">{`${(quantity * 0.5).toFixed(
                        1
                    )} libras`}</small>
                </li>
                <li className="resume__item">
                    <p className="resume__type">Vidrio</p>
                    <small className="resume__qty">{`${(
                        quantity * 0.07
                    ).toFixed(1)} libras`}</small>
                </li>
                <li className="resume__item">
                    <p className="resume__type">Tetrapack</p>
                    <small className="resume__qty">{`${(quantity * 0.1).toFixed(
                        1
                    )} libras`}</small>
                </li>
            </ul>

            <Link to="/user">
                <button type="button">Ok</button>
            </Link>
        </Fragment>
    );
};

export default Component;
