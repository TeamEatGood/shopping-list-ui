import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../layouts/Home';
import Header from './Header';

const App = () => (
    <div>
    <Header/>
    <BrowserRouter>
        <Route path="/" component={Home} />
    </BrowserRouter>
    </div>
);

export default App;