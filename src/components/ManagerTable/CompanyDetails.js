import React from 'react';

import { dict } from './index';
import BasicItem from './BasicItem';

export default class CompanyDetails extends React.Component {
    static defaultProps = {
        onSubmit: () => {
            //default no do anything.
        },
    }

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            address: this.props.address,
            telephone: this.props.telephone,
            contant_person_name: this.props.contant_person_name,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.CompanyItem = BasicItem(this.handleChange);
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
        const { CompanyItem } = this;

        return (
            <form className="manger-detail company" onSubmit={this.handleSubmit} >
                <ul className="details">
                    <CompanyItem title={dict.name} name="name" />
                    <CompanyItem title={dict.address} name="address" />
                    <CompanyItem title={dict.telephone} name="telephone" />
                    <CompanyItem title={dict.contant_person_name}
                        name="contant_person_name" />
                </ul>
                <input type="submit" value={ dict.submit }/>
            </form>
        );
    }
}
