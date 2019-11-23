import React, { Component } from 'react';


export default class Homepage extends Component {
    public state = {data: null};

    render(): React.ReactNode {
        return (
            <div>
                Welcome to Admin
            </div>
        );
    }
}

