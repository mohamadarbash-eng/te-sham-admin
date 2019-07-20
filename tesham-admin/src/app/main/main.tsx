import React, { Component } from 'react';
import Axios from 'axios';
import NewCourse from '../courses/new-course/new-course';

declare const M: any;
export default class Main extends Component {
    public  state = { data: null };

    componentDidMount(): void {
        Axios.get('http://localhost:3000/api/courses')
            .then((response) => {
               this.setState({data: response.data})
            })
        M.updateTextFields()
    }

    render(): React.ReactNode {
        return (
            <div>
                    <NewCourse></NewCourse>

            </div>
        );
    }
}

