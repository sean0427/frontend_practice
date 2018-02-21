import React from 'react';
import { connect } from 'react-redux';
import Selector from '../components/Selector';

const mapStateToProps = (state, _) => ({
    productType: state.products.type,
});

const PRODUCT_TYPE_ID = 'id';
const PRODUCT_TYPE_NAME = 'name';

const ProductTypeSelector = ({productType}) => (
    <Selector
        textName={PRODUCT_TYPE_NAME}
        valueName={PRODUCT_TYPE_ID}
        options={productType}
    />
);

export default connect(mapStateToProps)(ProductTypeSelector);
