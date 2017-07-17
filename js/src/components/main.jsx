import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'js/store';
import Container from 'js/src/components/container';
import 'styles/main.css';

function App() {
    return (
        <Provider store={store}>
            <div id="main-content">
                <Container/>
            </div>
        </Provider>
    );
}

render(<App/>, document.getElementById('app'));
