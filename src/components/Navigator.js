import React from 'react';
import { Link } from 'react-router-dom';

const dict = {
    PRODUCT_LIST: 'Product List',
    ITEM: 'Item',
    LOGIN: 'Login',
    LOGOUT: 'Logout',
};

export default class Navigator extends React.Component {
    static defaultProps = {
        shopcartNumber: 0,
        checkLogin: () => {
            //default do noting.
        },
        isLogin: false,
    };

    componentWillMount() {
        this.props.checkLogin();
    }

    render() {
        return (
            <header className="app-header">
                <h1 className="app-title">Shop</h1>
                <ul>
                    <li className="nav-item">
                        <Link to="/">
                            { dict.PRODUCT_LIST }
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shopcart">
                            <em className="shopcart-count">
                                { this.props.shopcartNumber }
                            </em>
                            { dict.ITEM }
                        </Link>
                    </li>
                    <li className="nav-item">
                        { this.props.isLogin ?
                            <em onClick={ this.props.onLogout }>{ dict.LOGOUT }</em> :
                            <Link to="/login">{ dict.LOGIN }</Link>
                        }
                    </li>
                    <li className="nav-item">
                        <Link to="/manager">
                            manager
                        </Link>
                    </li>
                </ul>
            </header>
        );
    }
}
