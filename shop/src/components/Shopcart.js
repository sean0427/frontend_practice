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
                <ul className="shoplist">
                    { this.props.shoplist.map(
                        (data, index) => <li key={index}>{data}</li>
                    ) }
                </ul>
                <input/>
                <button id="shoplist-btn" onClick={this.props.onPress} />
            </div>
        );
    }
}
