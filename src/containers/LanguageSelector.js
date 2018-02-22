import React from 'react';
import { connect } from 'react-redux';
import Selector from '../components/Selector';

const mapStateToProps = (state, _) => ({
    language: state.language,
});

const LANGUAGE_CODE = 'code';
const LANGUAGE_NAME = 'name';

const LanguageSelector = ({language}) => (
    <Selector
        name="language"
        textName={LANGUAGE_NAME}
        valueName={LANGUAGE_CODE}
        options={language}
    />
);

export default connect(mapStateToProps)(LanguageSelector);
