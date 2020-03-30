import React from 'react';
import {compose} from 'redux';
import PropTypes from 'prop-types';
import {withData} from "./withData";
import {GifTile} from "./components/GifTile/GifTile";
import {Page} from "../../components";

export const GifsComponent = React.memo(
    function GifsComponent({isLoading, filters, onFiltersChange, data, ...otherProps}) {
        if (isLoading) {
            return 'Loading';
        }

        return <Page>
            <div className='gifs__tiles-wrapper'>
                {data.map(({id, url}) => <GifTile key={id} contentUrl={url} />)}
            </div>
        </Page>;
    });

GifsComponent.propTypes = {
    isLoading: PropTypes.bool,
    filters: PropTypes.shape({
        phrase: PropTypes.string.isRequired,
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
    withData
)(GifsComponent);



