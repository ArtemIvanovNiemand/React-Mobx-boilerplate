import React, { Component, Fragment } from "react";
import { observer } from "mobx-react";
import Routes from './routes';

@observer
export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Routes />
            </Fragment>
        );
    }
}