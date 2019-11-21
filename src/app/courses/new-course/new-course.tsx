import Axios from 'axios';
import AbstractCourseDetails from '../abstract-course-details';
import { API_PATH } from '../../core.mod/proxy-service/proxy-service';


export default class NewCourse extends AbstractCourseDetails {

    componentDidMount(): void {
        this.setState({
            saveButtonLabel: 'Save', pageTitle: 'Create new Course', isDeletable: false
        });
    }

    public saveCourse(): void {
        Axios.post(API_PATH.NEW_COURSE, this.mapCourseData()).then((data) => {
            (this.props as any).history.push('/all-courses')
        })
    }
    public deleteCourse(): void {
    }
}
