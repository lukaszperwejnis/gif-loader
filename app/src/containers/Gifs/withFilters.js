import React from 'react';
import PropTypes from 'prop-types';
import qs from "qs";

export function withFilters(WrappedComponent) {
    return class withFilters extends React.PureComponent {
        constructor(props) {
            super(props);

            this.onFiltersChange = this.onFiltersChange.bind(this);
        }

        get filters() {
            return qs.parse(this.props.location.search, {ignoreQueryPrefix: true});
        }

        onFiltersChange(newFilters) {
            const filtersToAdd = {
                ...this.filters,
                ...newFilters,
            };

            this.props.history.push({
                search: this.toRouterValue(filtersToAdd)
            });
        }

        toRouterValue(filters) {
            const filteredFilters = Object.keys(filters).reduce((acc, current) => {
                if (Boolean(filters[current])) {
                    acc[current] = filters[current];
                    return acc;
                }

                return acc;
            }, {});

            return qs.stringify(filteredFilters);
        }

        render() {
            return <WrappedComponent {...this.props}
                                     filters={this.filters}
                                     onFiltersChange={this.onFiltersChange}
            />;
        }
    }
}

withFilters.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
