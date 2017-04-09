import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from '../layouts/Home';

const App = () => (
    <Router history={browserHistory}>
        <Route path="/" component={Home} />
    </Router>
);

export default App;