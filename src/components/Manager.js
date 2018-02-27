import React from 'react';

import PropTypes from 'prop-types';

export default class Manager extends React.Component {
    static defaultProps = {
        onMount: () => {
            //default no do anything.
        },
        onSubmit: () => {
            //default no do anything.
        },
        list: [],
        data: {},
    }

    static propTypes = {
        list: PropTypes.array,
    }

    constructor(props) {
        super(props);

        this.state = {
            data: {},
            current: 0,
            isNewItem: true,
        };
    }

    componentWillMount() {
        this.props.onMount();
    }

    render() {
        const { Table, Detail, onSubmit } = this.props;

        const child = this.props.children != undefined
            ? (<div className="container">{ this.props.children }</div>)
            : undefined;

        return (
            <section className="manager">
                <div className="container">
                    <Table
                        list={ this.props.list }
                        onPress={ index => this.setState({ current: index }) }
                    />
                </div>
                <div className="container">
                    <Detail onSubmit={ onSubmit } />
                </div>
                { child }
            </section>
        );
    }
}
