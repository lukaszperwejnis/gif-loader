import React from 'react';
import classNames from 'classnames';
import './Page.scss';

export const Page = ({className, ...otherProps}) => {
    return <div className={classNames('page', className)} {...otherProps}/>;
};

