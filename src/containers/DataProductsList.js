import { connect } from 'react-redux';

import ProductsList from '../components/ProductsList';
import { getProductsList } from '../actions/ProductsList';
//TODO Add page filter.
const mapStateToProps = (state, _) => ({
    pageNumber: 0,
    products: state.products.list,
});

const mapDispatchToProps = (dispatch, _) => ({
    onPress: () => { dispatch(getProductsList()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
