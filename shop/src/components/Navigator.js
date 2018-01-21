import React, { Component } from 'react';

export default class Navigator extends Component {
    static defaultProps = {
        shopcartNumber: 0, 
    };

    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">Test App</h1>
                <h1 className="shopcart-number">{ this.props.shopcartNumber }</h1>
            </header>
        );
    }
}
