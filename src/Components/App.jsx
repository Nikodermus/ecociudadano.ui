import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Trash from './Trash';
import Scan from './Scan';
import Resume from './Resume';
import User from './User';
import Register from './Register';

import phone from '../assets/phone.png';

const App = () => {
    return (
        <div className="app">
            <div className="app__content">
                <Router>
                    <Switch>
                        <Route path="/" exact component={Register} />
                        <Route path="/scan" exact component={Scan} />
                        <Route path="/trash" exact component={Trash} />
                        <Route
                            path="/resume/:quantity"
                            exact
                            component={Resume}
                        />
                        <Route path="/user" exact component={User} />
                    </Switch>
                </Router>
            </div>
            <img src={phone} className="app__img" alt="" />
        </div>
    );
};

export default App;
