import React from 'react';
import PropTypes from 'prop-types';
import style from '../css/Product.css';

import Product from './Product';
export default class ProductsList extends React.PureComponent {
    static defaultProps = {
        pageNumber: 0,
        products: [],
    };

    static propTypes = {
        pageNumber: PropTypes.number,
        products: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                imageSource: PropTypes.string,
                price: PropTypes.number,
            })
        ),
    };

    render() {
        return (
            <article className="products-list">
                { this.props.products.map(
                    (product, index) => (
                        <Product
                            key={index}
                            imageSource={product.imageSource}
                            name={product.name}
                            price={product.price}
                        />
                    )
                ) }
            </article>
        );
    }
}
