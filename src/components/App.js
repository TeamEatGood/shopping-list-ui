import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../layouts/Home';
import Header from './Header';
import Cup from './Cup';

const App = () => (
    <div>
        <Header/>
        <BrowserRouter>
            <Route path="/" component={Home} />
        </BrowserRouter>
        <Cup />
    </div>
);

export default App;