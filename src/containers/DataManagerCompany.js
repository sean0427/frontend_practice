import React from 'react';
import { connect } from 'react-redux';

import { insertCompany, getManagerCompanyData } from '../actions/Manager';

import CompanyDetails from '../components/ManagerTable/CompanyDetails';
import Manager from '../components/Manager';
import { TableCompany } from '../components/ManagerTable';

const mapStateToProps = ({ data }, _) => ({
    list: data.manager.list,
    message: data.manager.message,
});

const mapDispatchToProps = (dispatch, _) => ({
    onSubmit: (data) => { dispatch(insertCompany('', data)); },
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
