import { connect } from 'react-redux';

import { insertCompany } from '../actions/API';

import CompanyDetails from '../components/ManagerTable/CompanyDetails';

const mapStateToProps = ({ _data }, _) => ({});

const mapDispatchToProps = (dispatch, _) => ({
    onSubmit: (data) => { dispatch(insertCompany('', data)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetails);
