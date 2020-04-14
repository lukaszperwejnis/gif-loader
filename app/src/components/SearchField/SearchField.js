import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {debounce} from "../../utils/debounce";
import './SearchField.scss';

export const SearchField = ({className, name, onChange, value, ...otherProps}) => {
    const [phrase, setPhrase] = useState(value);
    const emitChange = useRef(debounce(onChange, 250)).current;

    const onPhraseChange = (event) => {
        const value = event.target.value;
        setPhrase(value);
        emitChange({
            [name]: value
        })
    };

    return <input className={classNames('search-field', className)}
                  value={phrase}
                  onChange={onPhraseChange}
                  name={name}
                  {...otherProps} />;
};

SearchField.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
};

SearchField.defaultProps = {
    value: ''
};
