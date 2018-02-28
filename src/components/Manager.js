import React from 'react';

import PropTypes from 'prop-types';

import '../css/Manager.css';

const NO_INDEX = -1;

export default class Manager extends React.Component {
    static defaultProps = {
        onMount: () => {
            //default no do anything.
        },
        onCreateNew: () => {
            //default no do anything.
        },
        onUpdate: () => {
            //default no do anything.
        },
        onDelete: () => {
            //default no do anything.
        },
        list: [],
    }

    static propTypes = {
        list: PropTypes.array,
    }

    constructor(props) {
        super(props);

        this.state = {
            current: NO_INDEX,
            isNewItem: true,
        };
    }

    componentWillMount() {
        this.props.onMount();
    }

    render() {
        const { Table, Detail, list, onCreateNew, onUpdate, onDelete } = this.props;
        const { current } = this.state;
        const data = list[current];

        const child = this.props.children != undefined
            ? (<div className="container">{ this.props.children }</div>)
            : undefined;

        return (
            <section className="manager">
                <div className="container">
                    <Table
                        list={ this.props.list }
                        onPress={ index => this.setState({
                            current: index === current ? NO_INDEX : index }) }
                        current={ current }
                    />
                </div>
                <div className="container">
                    <Detail
                        onCreateNew={ onCreateNew }
                        onUpdate={ onUpdate }
                        onDelete={ onDelete }
                        isCreate={ current === NO_INDEX }
                        { ...data }
                    />
                </div>
                { child }
            </section>
        );
    }
}
