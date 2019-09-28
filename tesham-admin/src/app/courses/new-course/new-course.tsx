import React from 'react';

import Axios from 'axios';
import AbstractCourseDetails  from '../abstract-course-details';



// abstract

export default class NewCourse extends AbstractCourseDetails  {

    constructor(props: any) {
        super(props);
    }
    componentDidMount(): void {
        this.setState({
            saveButtonLabel: 'Save', pageTitle: 'Create new Course'
        });
    }

    public saveCourse(): void {
        Axios.post('/api/course', this.mapCourseData()).then((data) => {
            console.log(data)
        })
    }
}
