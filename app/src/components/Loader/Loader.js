import React from "react";
import classNames from 'classnames';
import './Loader.scss';

export const Loader = ({className, ...otherProps}) => {
    return <div className={classNames('loader', className)} {...otherProps} />;
};
