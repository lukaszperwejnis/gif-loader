import React from "react";
import {Routes} from "./routes";
import {ErrorBoundary} from "./containers/ErrorBoundary/ErrorBoundary";

export function App() {
    return <ErrorBoundary>
        <Routes/>
    </ErrorBoundary>;
}
