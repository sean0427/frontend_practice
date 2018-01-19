import React from 'react';

export default class Shopcart extends React.PureComponent {
    static defaultProps = {
        shoplist: [],
        onPress: () => {
            //default not do anything.
        },
    };

    render () {
        return (
            <div>
                <div className="shoplist">
                    <ul>
                        { this.props.shoplist.map((data) => <li>{data}</li>) }
                    </ul>
                </div>
                <input/>
                <button onPress={this.props.onPress} />
            </div>
        )
    }
}
