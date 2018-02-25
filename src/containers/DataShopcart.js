import { connect } from 'react-redux';

import Shopcart from '../components/Shopcart';
import { appendToShoplist } from '../actions/Shoplist';

const mapStateToProps = ({ data }, _) => ({
    shoplist: data.shoplist,
});

//TODO workaround hardcode for test.
const mapDispatchToProps = (dispatch, _) => ({
    onPress: () => { dispatch(appendToShoplist('data')); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Shopcart);
