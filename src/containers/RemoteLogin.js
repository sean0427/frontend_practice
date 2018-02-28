import { connect } from 'react-redux';

import Login from '../components/Login';
import { signUpUser } from '../actions/login';

const mapStateToProps = (_state, _) => ({});

const mapDispatchToProps = (dispatch, _) => ({
    onPress: (email, password) => { dispatch(signUpUser(email, password)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
