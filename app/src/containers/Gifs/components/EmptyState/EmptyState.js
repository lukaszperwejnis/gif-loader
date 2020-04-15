import React from 'react';
import classNames from 'classnames';
import './EmptyState.scss';

export const EmptyState = ({className, ...otherProps}) => {
    return <div className={classNames('empty-state', className)} {...otherProps} />;
};
