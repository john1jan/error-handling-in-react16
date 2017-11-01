import React, { Component } from 'react';
import './App.css';
class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="App">
                    Something went wrong
        </div>
            );
        }
        return (
            <div className="App" >
                {this.props.children}
            </div>
        );

    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }
}

export default ErrorBoundary;
