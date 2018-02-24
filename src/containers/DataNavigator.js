import { connect } from 'react-redux';

import Navigator from '../components/Navigator.js';

const mapStateToProps = (state) => ({
    shopcartNumber: state.shoplist.length,
    login_user: state.user.email,
});

export default connect(mapStateToProps)(Navigator);
