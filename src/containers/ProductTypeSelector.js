import { connect } from 'react-redux';
import Selector from '../components/Selector';

const PRODUCT_TYPE_ID = 'id';
const PRODUCT_TYPE_NAME = 'name';

const mapStateToProps = ({ data }, _) => ({
    textName: PRODUCT_TYPE_NAME,
    valueName: PRODUCT_TYPE_ID,
    options: data.products.type,
});

export default connect(mapStateToProps)(Selector);
