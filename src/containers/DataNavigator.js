import { connect } from 'react-redux';

import Navigator from '../components/Navigator';
import { checkLogin, LOGIN_STATUS_CODE, logout } from '../actions/login';

const mapStateToProps = ({ data }) => ({
    shopcartNumber: data.shoplist.length,
    isLogin: data.user.user_state === LOGIN_STATUS_CODE.LOGIN,

});

const mapDispatchToProps = (dispatch, _) => ({
    checkLogin: () => { dispatch(checkLogin()); },
    onLogout: () => { dispatch(logout()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
