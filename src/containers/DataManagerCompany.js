import React from 'react';
import { connect } from 'react-redux';

import { insertCompany, getManagerCompanyData, updateCompany, deleteCompany } from '../actions/Manager';

import CompanyDetails from '../components/ManagerTable/CompanyDetails';
import Manager from '../components/Manager';
import { TableCompany } from '../components/ManagerTable';

const mapStateToProps = ({ data }, _) => ({
    list: data.manager.list,
    message: data.manager.message,
});

const mapDispatchToProps = (dispatch, _) => ({
    onCreateNew: data => { dispatch(insertCompany('', data)); },
    onUpdate: (data, id) => { dispatch(updateCompany('', data, id)); },
    onDelete: id => { dispatch(deleteCompany('', '', id)); },
    onMount: () => { dispatch(getManagerCompanyData()); },
});

const _ComapnyManager = (props) => (
    <Manager
        Table={ TableCompany }
        Detail={ CompanyDetails }
        { ...props }
    />
);

export default connect(mapStateToProps, mapDispatchToProps)(_ComapnyManager);
