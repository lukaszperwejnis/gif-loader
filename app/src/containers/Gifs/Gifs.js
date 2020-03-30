import React from 'react';
import {compose} from 'redux';
import PropTypes from 'prop-types';
import {withData} from "./withData";
import {GifTile} from "./components/GifTile/GifTile";
import {Page} from "../../components";
import {withRouter} from "react-router";
import {GifsFilters} from "./components/GifsFilters/GifsFilters";

export const GifsComponent = React.memo(
    function GifsComponent({isLoading, filters, onFiltersChange, data, ...otherProps}) {
        if (isLoading) {
            return 'Loading';
        }

        return <Page>
            <GifsFilters onFiltersChange={onFiltersChange} filters={filters}/>
            <div className='gifs__tiles-wrapper'>
                {data.map(({id, url}) => <GifTile key={id} contentUrl={url} />)}
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



