import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const ErrorPage = React.lazy(() => import('../../core.mod/error-handler/error-page'));
const EditDiploma = React.lazy(() => import('../../diplomas/edit-diploma/edit-diploma'));
const AllDiplomas = React.lazy(() => import('../../diplomas/all-diplomas/all-diplomas'));
const NewDiploma = React.lazy(() => import('../../diplomas/new-diploma/new-diploma'));
const EditCourse = React.lazy(() => import('../../courses/edit-course/edit-course'));
const AllCourses = React.lazy(() => import('../../courses/all-courses/all-courses'));
const NewCourse = React.lazy(() => import('../../courses/new-course/new-course'));
const Loading = () => <div>...Loading</div>;
export default class Main extends Component {
    public state = {data: null};

    render(): React.ReactNode {
        return (
            <React.Fragment>
                <Switch>
                    <Route path='/new-course'  render={() => <Suspense fallback={<Loading/>}> <NewCourse /></Suspense>}/>
                    <Route path='/all-courses' render={(props) => <Suspense fallback={<Loading/>}><AllCourses {...props}/></Suspense>}/>
                    <Route path='/edit-course/:courseName' render={(props) => <Suspense fallback={<Loading/>}><EditCourse {...props}></EditCourse></Suspense>}/>
                    <Route path='/new-diploma'  render={() => <Suspense fallback={ <Loading/>}><NewDiploma/></Suspense>}/>
                    <Route path='/all-diplomas' render={(props) => <Suspense fallback={ <Loading/>}><AllDiplomas {...props} /></Suspense>}/>
                    <Route path='/edit-diploma/:diplomaName' render={(props) => <Suspense fallback={<Loading/>}><EditDiploma {...props} /></Suspense>}/>
                    <Route path='/error-page' render={() => <Suspense fallback={<Loading/>}><ErrorPage/></Suspense>}/>
                    <Route  render={() => <Suspense fallback={<Loading/>}><ErrorPage /></Suspense>}/>
                </Switch>
            </React.Fragment>
        );
    }
}

