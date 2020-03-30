import React from 'react';
import config from "../config";

export function withRequests(WrappedComponent) {
    return class withRequests extends React.PureComponent {
        static RESPONSE_METHODS = {
          GET: 'get'
        };

        static REQUEST_HEADERS = {
            'Content-Type': 'application/json',
            'Origin': config.API_URL,
            'Access-Control-Allow-Origin': true,
        };

        async getRequest(url) {
            return await fetch(
                url,
                {
                    method: withRequests.RESPONSE_METHODS.GET,
                    headers: withRequests.REQUEST_HEADERS
                }
            );
        }

        render() {
            return <WrappedComponent {...this.props}
                                     getRequest={this.getRequest}
            />;
        }
    }
}
