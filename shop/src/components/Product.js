import React from 'react';

export default class Product extends React.PureComponent {
    static defaultProps = {
        imageSource: '',
        name: '',
        price: 0,
    };

    render() {
        const { imageSource, name, price } = this.props;

        return (
            <section className="product-item">
                <img src={ imageSource } alt="product image" />
                <h5>{ name }</h5>
                <em>{ price }</em>
            </section>
        );
    }
}
