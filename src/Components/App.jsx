import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Trash from './Trash';
import Scan from './Scan';
import Resume from './Resume';
import User from './User';
import Register from './Register';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Register} />
                <Route path="/scan" exact component={Scan} />
                <Route path="/trash" exact component={Trash} />
                <Route path="/resume" exact component={Resume} />
                <Route path="/user" exact component={User} />
            </Switch>
        </Router>
    );
};

export default App;
