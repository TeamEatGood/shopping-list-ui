import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import groceryApp from './reducers';
import App from './components/App';

const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};

const crashReporter = store => next => action => {
    try {
        return next(action);
    }
    catch (err) {
        console.error('Caught an exception!', err);
        Raven.captureException(err, {
            extra: {
                action,
                state: store.getState()
            }
        });
        throw err;
    }
};

let store = createStore(
    groceryApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger, crashReporter)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);