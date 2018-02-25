import React from 'react';
import { Link } from 'react-router-dom';

const dict = {
    languageProduct: 'LanguageProduct',
    company: 'Company',
    product: 'Product',
    manager: 'Manager',
};

export default ({ match, children }) => (
    <div>
        <h2>dict.manager</h2>
        <ul>
            <li>
                <Link to={`${ match.url }/company`}>
                    { dict.company }
                </Link>
            </li>
            <li>
                <Link to={`${ match.url }/product`}>
                    { dict.product }
                </Link>
            </li>
        </ul>
        <div>
            {children}
        </div>
    </div>

);
