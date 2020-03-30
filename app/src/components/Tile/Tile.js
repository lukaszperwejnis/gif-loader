import React from 'react';
import {compose, classNames} from 'react-compose'
import './Tile.scss';

export const Tile = compose(classNames("tile"))("article");
