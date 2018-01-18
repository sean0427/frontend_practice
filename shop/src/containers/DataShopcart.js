import { connect } from 'react-redux';

import Shopcart from '../components/Shopcart';
import { appendToShoplist } from '../actions/Shoplist';

const mapStateToProps = (state, ownProps) => {
    return {
        shoplist: state.shoplist,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onPress: () => { dispatch(appendToShoplist('data')); }
})

export default connect(mapStateToProps, mapDispatchToProps)(Shopcart)
