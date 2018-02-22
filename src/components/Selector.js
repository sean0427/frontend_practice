import React from 'react';

export default class Selector extends React.Component {
    static defaultProps = {
        textName: 'text',
        valueName: 'vaule',
        name: 'title',
        options: [],
    };

    constructor(props) {
        super(props);

        this.state = {
            selected: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ selected: event.target.value });
        event.preventDefault();
    }

    render() {
        const { options, valueName, textName, name } = this.props;

        return (
            <label>
                <select
                    name={ name }
                    value={ this.state.selected }
                    onChange={ this.handleChange }
                >
                    {
                        options.map((value, index) =>
                            <option
                                key={ index }
                                value={ value[valueName] }
                            >
                                { value[textName] }
                            </option>
                        )

                    }
                </select>
            </label>
        );
    }
}
