import React from 'react';
import PropTypes from 'prop-types';
import {compose} from 'recompose';
import shallowequal from "shallowequal";
import config from "../../config";
import {withRequests} from "../../hocs/withRequests";
import {withFilters} from "./withFilters";

export function withData(WrappedComponent) {
    return withComposedHocs(
        class withDataComponent extends React.PureComponent {
            constructor(props) {
                super(props);
                this.state = {
                    data: null,
                };

                this.fetchData = this.fetchData.bind(this);
            }

            componentDidMount() {
                this.fetchData();
            }

            componentDidUpdate(prevProps) {
                if (!shallowequal(prevProps.filters, this.props.filters)) {
                    this.fetchData();
                }
            }

            get paramsFromFilters() {
                return Object.keys(this.props.filters).map(key => {
                    return `${key}=${this.props.filters[key]}`
                }).join('&');
            }

            async fetchData() {
                try {
                    const result = await this.props.getRequest(config.API_URL + '/gifs?' + this.paramsFromFilters);
                    if (result.ok) {
                        const dataObj = await result.json();
                        this.setState({
                            data: [...dataObj.data]
                        });
                    }
                } catch (e) {
                    console.log({e});
                }
            }

            render() {
                return <WrappedComponent {...this.props}
                                         {...this.state}
                                         isLoading={!this.state.data}
                />;
            }
        }
    )
}

const withComposedHocs = compose(
    withRequests,
    withFilters
);

withData.propTypes = {
    getRequest: PropTypes.func.isRequired,
    filters: PropTypes.shape({
        query: PropTypes.string
    }).isRequired,
    onFiltersChange: PropTypes.func.isRequired
};
