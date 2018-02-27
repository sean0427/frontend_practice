import React from 'react';

export default class Product extends React.PureComponent {
    static defaultProps = {
        name: '',
        imageSource: '',
        price: 0,
        describe: '',
        product_id: 0,
        discounted_product_id: 0,
        discount: 1, 
    };

    render() {
        const { imageSource, name, price, discount, describe } = this.props;

        return (
            <section className="product-item">
                <img src={ imageSource } />
                <h5>{ name }</h5>
                <div className="describe">{ describe }</div>
                <em className="dollar">
                    { discount == 1 ? price : discount * price / 100 }
                </em>
            </section>
        );
    }
}
