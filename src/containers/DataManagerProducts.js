import React from 'react';
import { connect } from 'react-redux';

import { insertProduct, getManagerProductInformation, deleteProduct, updateProduct } from '../actions/Manager';
//import LanguageSelector from './LanguageSelector';
import Manager from '../components/Manager';
import { ProductsTable } from '../components/ManagerTable';
import { default as Details } from '../components/ManagerTable/ProductDetails';

const mapStateToProps = ({ data }, _) => ({
    list: data.manager.list,
});

const mapDispatchToProps = (dispatch, _) => ({
    onCreateNew: data => { dispatch(insertProduct('', data)); },
    onUpdate: (data, id) => { dispatch(updateProduct('', data, id)); },
    onDelete: id => { dispatch(deleteProduct('', '', id)); },
    onMount: () => { dispatch(getManagerProductInformation()); },
});

const DataProductsTable = (props) => (
    <Manager
        Table={ ProductsTable }
        Detail={ Details }
        { ...props }
    />
);

export default connect(mapStateToProps, mapDispatchToProps)(DataProductsTable);
