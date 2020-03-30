import React from 'react';
import config from "../../config";
import {withRequests} from "../../hocs/withRequests";

export function withData(WrappedComponent) {
    return withRequests(
        class withDataComponent extends React.PureComponent {
            constructor(props) {
                super(props);
                this.state = {
                    data: null,
                    phrase: ''
                };

                this.fetchData = this.fetchData.bind(this);
            }

            componentDidMount() {
                this.fetchData();
            }

            async fetchData() {
                try {
                    const result = await this.props.getRequest(config.API_URL +`/gifs?query=${this.state.phrase}`);
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
