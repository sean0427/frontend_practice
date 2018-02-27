import React from 'react';
import { connect } from 'react-redux';

import { insertNewProduct, getManagerProductInformation } from '../actions/Manager';
//import LanguageSelector from './LanguageSelector';
import Manager from '../components/Manager';
import { ProductsTable } from '../components/ManagerTable';
import { default as Details } from '../components/ManagerTable/ProductDetails';

const mapStateToProps = ({ data }, _) => ({
    data: data.products.list,
});

const mapDispatchToProps = (dispatch, _) => ({
    onSubmit: (data) => { dispatch(insertNewProduct('', data)); },
    onMount: () => { dispatch(getManagerProductInformation); },
});

const DataProductsTable = (props) => (
    <Manager
        Table={ ProductsTable }
        Detail={ Details }
        { ...props }
    />
);

export default connect(mapStateToProps, mapDispatchToProps)(DataProductsTable);
