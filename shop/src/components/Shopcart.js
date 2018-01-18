import React from 'react';

export default class Shopcart extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            shoplist: [1, 2]
        }
    }
    render () {
        console.log(this.props)
        return (
            <div>
                <div className="playlists">
                    <ul>
                        { this.props.shoplist.map((data) => <li>{data}</li>) }
                    </ul>
                </div>
                <input/>
                <button onClick={this.props.onPress} />
            </div>
        )
    }
}
