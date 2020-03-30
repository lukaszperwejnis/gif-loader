import React from "react";
import {ErrorScreen} from "../../components/ErrorScreen/ErrorScreen";

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    render() {
        return this.state.hasError ? <ErrorScreen/> : this.props.children
    }
}
