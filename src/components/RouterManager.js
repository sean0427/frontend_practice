import React from 'react';
import { Link } from 'react-router-dom';

const dict = {
    languageProduct: 'LanguageProduct',
    company: 'Company',
    product: 'Product',
    manager: 'Manager',
};

export default ({ match, children }) => (
    <div className="nav-wrapper wrapper">
        <div className="sub-header">
            <h2>{ dict.manager }</h2>
            <ul>
                <li className="nav-item">
                    <Link to={`${ match.url }/company`}>
                        { dict.company }
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={`${ match.url }/product`}>
                        { dict.product }
                    </Link>
                </li>
            </ul>
        </div>
        <div>
            {children}
        </div>
    </div>
);
