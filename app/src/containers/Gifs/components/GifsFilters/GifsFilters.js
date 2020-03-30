import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {SearchField} from "../../../../components/SearchField/SearchField";
import './GifsFilters.scss';

export const GifsFilters = ({className, filters, onFiltersChange}) => {
    return <div className={classNames('gifs-filters', className)}>
        <SearchField name='query' value={filters.query} onChange={onFiltersChange} />
    </div>;
};

GifsFilters.propTypes = {
    filters: PropTypes.shape({
        query: PropTypes.string
    }).isRequired,
    onFiltersChange: PropTypes.func.isRequired
};
