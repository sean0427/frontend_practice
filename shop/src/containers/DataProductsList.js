
import { connect } from 'react-redux';

import ProductsList from '../components/ProductsList';

//TODO Add page filter.
const mapStateToProps = (state, ownProps) => {
    return {
        pageNumber: 0,
        products: state.productsList,
    };
};

export default connect(mapStateToProps)(ProductsList)
