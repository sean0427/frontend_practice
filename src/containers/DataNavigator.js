import { connect } from 'react-redux';

import Navigator from '../components/Navigator.js';

const mapStateToProps = ({ data }) => ({
    shopcartNumber: data.shoplist.length,
    login_user: data.user.email,
});

export default connect(mapStateToProps)(Navigator);
