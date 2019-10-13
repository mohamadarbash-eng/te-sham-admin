import React from 'react'


export default class ErrorHandler extends React.Component {
    state = {
        hasError: false,
        message: ''
    };

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.setState({
            hasError: true,
            message: error
        })
    }

    render(): React.ReactNode {
        if (this.state.hasError) {
            return (
                <>
                    <p>'Something went wrong'</p>
                    <p>{this.state.message}</p>
                </>
            );
        }
        return this.props.children;
    }
}
