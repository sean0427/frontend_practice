import { connect } from 'react-redux';
import Selector from '../components/Selector';

const NAME = 'language';
const LANGUAGE_CODE = 'code';
const LANGUAGE_NAME = 'name';

const mapStateToProps = ({ data }, _) => ({
    name: NAME,
    textName: LANGUAGE_NAME,
    valueName: LANGUAGE_CODE,
    options: data.language,
});


export default connect(mapStateToProps)(Selector);
