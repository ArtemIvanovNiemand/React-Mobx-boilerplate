import React, { Component , Fragment} from "react";
import { observer } from "mobx-react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from 'pages/home';
import About from 'pages/about';

@observer
export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </Fragment>

            </Router>
        );
    }
}