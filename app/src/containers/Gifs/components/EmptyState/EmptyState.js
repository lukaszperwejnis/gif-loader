import React from 'react';
import {compose, classNames} from "react-compose";
import './EmptyState.scss';

export const EmptyState = compose(classNames("empty-state"))('div');
