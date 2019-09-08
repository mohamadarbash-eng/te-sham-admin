import React from 'react';
import Axios from 'axios'
import { API_PATH, DATA_BANK } from '../../core.mod/proxy-service/proxy-service';
import { Link } from 'react-router-dom';

export class AllCourses extends React.Component<any> {
    public state: { [key: string]: string } = {};

    componentDidMount(): void {
        Axios.get(API_PATH.COURSES)
            .then(({data}) => {
                let courses;
                if (data) {
                    courses = data.courses.map((course: any) => {
                        return (
                            <div className='col s12 m4' key={course.id}>
                                <div className='card'>
                                    <div className='card-image'>
                                        <img src={DATA_BANK + API_PATH.IMAGE + course.imageUrl}/>
                                        <span className='card-title'>{course.title}</span>
                                        <Link to={'/edit-course/' + course.courseName}
                                              className='btn-floating halfway-fab waves-effect waves-light red'><i
                                            className='material-icons'>add</i></Link>
                                    </div>
                                    <div className='card-content'>
                                        <p>{course.shortDescription}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                this.setState({courses})
            })

    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className='container'>
                <div className='row'>
                    {this.state.courses}
                </div>
            </div>
        );
    }

}