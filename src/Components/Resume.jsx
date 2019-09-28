import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { TRASH_TRANSACTION } from '../utils/constants';

const Component = ({ match }) => {
    const { quantity = 1 } = match.params;
    const data = JSON.parse(localStorage.getItem(TRASH_TRANSACTION));

    return (
        <Fragment>
            <h1 className="resume__title">{`${quantity} Libra${
                Number(quantity) === 1 ? '' : 's'
            }`}</h1>
            <h2 className="resume__sub">Total Reciclaje</h2>
            <ul className="resume__list">
                {data.map(({ garbageType, point }) => (
                    <li className="resume__item" key={garbageType}>
                        <p className="resume__type">{garbageType}</p>
                        <small className="resume__qty">{`${point.toFixed(
                            1
                        )} libras`}</small>
                    </li>
                ))}
            </ul>

            <Link to="/user">
                <button type="button">Ok</button>
            </Link>
        </Fragment>
    );
};

export default Component;
