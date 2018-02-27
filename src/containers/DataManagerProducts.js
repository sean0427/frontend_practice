import React from 'react';
import { connect } from 'react-redux';

import { insertNewProduct } from '../actions/Manager';
import LanguageSelector from './LanguageSelector';
import { ProductsTable } from '../components/ManagerTable';
import { default as Details } from '../components/ManagerTable/ProductDetails';

const mapStateToProps = ({ data }, _) => ({
    productsList: data.products.list,
});

const mapDispatchToProps = (dispatch, _) => ({
    onSubmit: (data) => { dispatch(insertNewProduct('', data)); },
});

const DataProductsTable = (props) => (
    <ProductsTable
        productsList={ props.productsList}
    >
        <Details { ...props }>
            <LanguageSelector />
        </Details>
    </ProductsTable>
);

export default connect(mapStateToProps, mapDispatchToProps)(DataProductsTable);
