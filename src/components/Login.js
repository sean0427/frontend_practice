import React from 'react';

const dict = {
    email: 'email',
    password: 'password',
    submit: 'submit',
};

export default class Selector extends React.Component {
    static default = {
        onPress: () => {
            //default do notthing.
        },
    };

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit(event) {
        this.props.onPress(this.state.email, this.state.password);
        event.preventDefault();
    }

    handleChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <form className="login" onSubmit={this.handleSubmit}>
                <lable>
                    <h5>{ dict.email }</h5>
                    <input name="email" type="email" onChange={this.handleChange}/>
                </lable>
                <lable>
                    <h5>{ dict.password }</h5>
                    <input name="password" type="password" onChange={this.handleChange}/>
                </lable>
                <br/>
                <button type="submit">{ dict.submit }</button>
            </form>
        );
    }
}
