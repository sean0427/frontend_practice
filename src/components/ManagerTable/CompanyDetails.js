import React from 'react';

import { dict } from './index';
import BasicItem from './BasicItem';

export default class CompanyDetails extends React.Component {
    static defaultProps = {
        onCreateNew: () => {
            //default no do anything.
        },
        onUpdate: () => {
            //default no do anything.
        },
        onDelete: () => {
            //default no do anything.
        },
        isCreate: true,
    }

    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            address: props.address,
            telephone: props.telephone,
            contant_person_name: props.contant_person_name,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.CompanyItem = BasicItem(this.handleChange);
    }

    handleClear() {
        this.setState({
            name: '',
            address: '',
            telephone: '',
            contant_person_name: '',
        });

    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    handleDelete(event) {
        event.preventDefault();
        this.props.onDelete(this.props.id);
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.props.isCreate) this.props.onCreateNew(JSON.stringify(this.state));
        else this.props.onUpdate(JSON.stringify(this.state), this.props.id);
    }

    componentWillReceiveProps(props) {
        this.setState({
            name: props.name || '',
            address: props.address || '',
            telephone: props.telephone || '',
            contant_person_name: props.contant_person_name || '',
        });
    }

    render() {
        const { CompanyItem } = this;

        return (
            <form className="manger-detail company" onSubmit={this.handleSubmit}>
                <ul className="details">
                    <CompanyItem title={dict.name}
                        name="name"
                        value={ this.state.name } />
                    <CompanyItem title={dict.address}
                        name="address"
                        value={ this.state.address }/>
                    <CompanyItem title={dict.telephone}
                        name="telephone"
                        value={ this.state.telephone }/>
                    <CompanyItem title={dict.contant_person_name}
                        name="contant_person_name"
                        value={ this.state.contant_person_name }
                    />
                </ul>
                <div>
                    <button 
                        disabled={this.props.isCreate} 
                        onClick={ this.handleDelete }>
                        { dict.delete }
                    </button>
                    <button onClick={ this.handleClear }>{ dict.clear }</button>
                    <input
                        type="submit"
                        value={ this.props.isCreate ? dict.create : dict.update }/>
                </div>
            </form>
        );
    }
}
