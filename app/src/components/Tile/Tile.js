import React from 'react';
import classNames from 'classnames';
import './Tile.scss';

export const Tile = ({className, ...otherProps}) => {
    return <article className={classNames('tile', className)} {...otherProps} />;
};

