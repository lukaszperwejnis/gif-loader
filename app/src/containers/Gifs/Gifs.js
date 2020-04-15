import React from 'react';
import {compose} from 'redux';
import PropTypes from 'prop-types';
import {withData} from "./withData";
import {GifTile} from "./components/GifTile/GifTile";
import {Page} from "../../components";
import {withRouter} from "react-router";
import {GifsFilters} from "./components/GifsFilters/GifsFilters";
import {EmptyState} from "./components/EmptyState/EmptyState";
import {Loader} from "../../components/Loader/Loader";
import './Gifs.scss';

export const GifsComponent = React.memo(
    function GifsComponent({isLoading, filters, onFiltersChange, data}) {
        if (isLoading) {
            return <Loader/>;
        }

        return <Page>
            <div className='gifs__content'>
                <GifsFilters className='gifs__filters' onFiltersChange={onFiltersChange} filters={filters}/>
                {Boolean(data.length) && <div className='gifs__tiles-wrapper'>
                    {data.map(({id, url}) => <GifTile key={id} className='gifs__tile' contentUrl={url} />)}
                </div>}
                {filters.query && !data.length  && <EmptyState>
                    There is no images for query: {filters.query}
                </EmptyState>}
            </div>
        </Page>;
    });

GifsComponent.propTypes = {
    isLoading: PropTypes.bool,
    filters: PropTypes.shape({
        phrase: PropTypes.string,
    }),
    onFiltersChange: PropTypes.func,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            url: PropTypes.string.isRequired
        })
    )
};

export const Gifs = compose(
    withRouter,
    withData
)(GifsComponent);



