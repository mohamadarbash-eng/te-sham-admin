import Axios from 'axios';
import AbstractDiplomaDetails from '../abstract-diploma-details';
import { API_PATH } from '../../core.mod/proxy-service/proxy-service';


export default class NewDiploma extends AbstractDiplomaDetails {

    componentDidMount(): void {
        this.setState({
            saveButtonLabel: 'Save', pageTitle: 'Create new Diploma'
        });
    }

    public saveCourse(): void {
        Axios.post(API_PATH.NEW_DIPLOMA, this.mapCourseData()).then((data) => {
            // TODO handel the response / or error
        })
    }
}
