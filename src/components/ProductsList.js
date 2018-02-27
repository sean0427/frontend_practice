import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

//Style
import '../css/Product.css';

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
                describe: PropTypes.string,
                product_id: PropTypes.integer,
                discounted_product_id: PropTypes.integer,
                discount: PropTypes.integer,
            })
        ),
    };

    renderProductList(list) {
        return list.map((data, index) =>
            ( <Product key={ index } { ...data } />));
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onPress}>
                refrash
                </button>
                <article className="products-list">
                    { this.renderProductList(this.props.products) }
                </article>
            </div>
        );
    }
}
