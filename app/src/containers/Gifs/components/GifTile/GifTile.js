import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Tile} from "../../../../components";
import './GifTile.scss';

export const GifTile = ({className, contentUrl, ...otherProps}) => {
    return <Tile className={classNames(className, 'gif-tile')}>
        <img className='gif-tile__content' src={contentUrl} alt="gif image"/>
    </Tile>
};

GifTile.propTypes = {
    contentUrl: PropTypes.string.isRequired,
};



