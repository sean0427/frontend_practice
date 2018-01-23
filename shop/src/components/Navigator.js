import React from 'react';
import { Link } from 'react-router-dom';

export default class Navigator extends React.Component {
    static defaultProps = {
        shopcartNumber: 0,
    };

    render() {
        return (
            <header className="app-header">
                <h1 className="app-title">Shop</h1>
                <ul>
                    <li className="nav-item">
                        <Link to="/">
                            Product List
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shopcart">
                            Shopping <em className="shopcart-count">{this.props.shopcartNumber}</em> Item
                        </Link>
                    </li>
                </ul>
            </header>
        );
    }
}
