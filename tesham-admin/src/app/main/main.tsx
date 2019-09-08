import React, { Component } from 'react';
import Axios from 'axios';
import NewCourse from '../courses/new-course/new-course';
import { Route } from 'react-router-dom';
import { AllCourses } from '../courses/all-courses/all-courses';
import { EditCourse } from '../courses/edit-course/edit-course';

declare const M: any;
export default class Main extends Component {
    public  state = { data: null };

    render(): React.ReactNode {
        return (
            <div>
                <Route path='/new-course'   component={NewCourse}/>
                <Route path='/all-courses'   component={AllCourses}/>
                <Route path='/edit-course/:courseName'   component={EditCourse}/>
            </div>
        );
    }
}

