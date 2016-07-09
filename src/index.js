import React from 'react';
import { render } from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import BootLoader from './BootLoader';

// Our views.
import DefaultLayout from './Layout/DefaultLayout';
import { HomeIndex } from './Layout/Home/Home';
import { DeckBuilderIndex } from './Layout/DeckBuilder/DeckBuilder';

BootLoader.load().then(function () {
    console.log('BootLoader is done');
});

render((
    <Router history={browserHistory}>
        <Route path="/" component={DefaultLayout}>
            <IndexRoute component={HomeIndex} />
            <Route path="deckbuilder">
                <IndexRoute component={DeckBuilderIndex} />
            </Route>
        </Route>
    </Router>
), document.getElementById('root'));
