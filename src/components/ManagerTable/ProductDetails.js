import React from 'react';

import { dict } from './index';
import BasicItem from './BasicItem';

/**
 * Language Product
 */
export default class ProductDetails extends React.Component {
    static defaultProps = {
        onSubmit: () => {
            //default no do anything.
        },
    };

    constructor(props) {
        super(props);

        this.state = {
            product_type: 1,
            manufacturing: 1,
            name: this.props.name,
            describe: this.props.describe,
            image: this.props.image,
            type: this.props.type,
            publisher: 1,
            price: 200,
            start_datetime: '2016-1-1',
            end_datetime: '2016-1-1',
            locale: 1,
            language: 1,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.ProductItem = BasicItem(this.handleChange);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(JSON.stringify(this.state));
    }

    render() {
        const { ProductItem } = this;

        return (
            <div>
                <form className="manger-detail product" onSubmit={this.handleSubmit} >
                    { this.props.children }
                    <ul className="details">
                        <ProductItem title={dict.manufacturing} name="manufacturing" />
                        <ProductItem title={dict.name} name="name" />
                        <ProductItem title={dict.describe} name="describe" />
                        <ProductItem title={dict.image} name="image" />
                        <ProductItem title={dict.price} name="price" />
                        <ProductItem title={dict.publisher} name="publisher" />
                        <ProductItem type={ 'datatime-local' }
                            title={dict.start_datetime} name="start_datetime" />
                        <ProductItem type={ 'datetime-local' }
                            title={dict.end_datetime} name="end_datetime" />

                    </ul>
                    <input type="submit" value={ dict.submit }/>
                </form>
            </div>);
    }
}
