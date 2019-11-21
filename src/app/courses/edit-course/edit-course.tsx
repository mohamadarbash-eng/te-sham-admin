import Axios from 'axios';
import AbstractCourseDetails from '../abstract-course-details';
import { cloneDeep } from 'lodash';
import { API_PATH } from '../../core.mod/proxy-service/proxy-service';

declare const M: any;

export default class EditCourse extends AbstractCourseDetails {
    public courseID: string = '';


    componentDidMount(): void {
        this.setState({
            saveButtonLabel: 'Update',
            pageTitle: 'Edit Course',
            isDeletable: true
        });
        Axios.get( API_PATH.COURSE_DETAILS + (this.props as any).match.params.courseName).then(({data}) => {
            if (data) {
                this.courseID = data.id;
                // TODO fix it
                let formControls = cloneDeep(this.state.formControls);
                for (const item in data) {
                    if (!!data[item] && typeof data[item] === 'object') {
                        const subCourseItem = cloneDeep(data[item]);
                        formControls = {
                            ...formControls,
                            [item]: {
                                ...this.spreadData(formControls[item], subCourseItem)
                            }
                        }
                    } else {
                        for (const control in formControls) {
                            if (formControls[item] && formControls[item].value !== undefined && control) {
                                formControls[item].value = data[item];
                            }
                        }
                    }
                }
                this.setState({
                    formControls: formControls
                })
            }
            else {
                console.log('fsdfd')
            }
            }).catch((e: Error) => {
            (this.props as any).history.push('/error-page')
        });
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{}>, snapshot?: any): void {
        M.updateTextFields();
    }

    public spreadData(formControl: any, nestedData: any): any {
        for (const nestedItem in nestedData) {
            if (formControl[nestedItem] && formControl[nestedItem].value !== undefined) {
                (formControl[nestedItem] as any).value = nestedData[nestedItem];
            }
        }
        return formControl;
    }

    public saveCourse(): void {
        if (this.courseID) {
            Axios.put('/api/course/' + this.courseID, this.mapCourseData()).then((data) => {
                (this.props as any).history.push('/all-courses')
            })
        }
    }

    public deleteCourse(): void {
        if (this.courseID) {
            Axios.delete('/api/course/' + this.courseID).then(() => {
                (this.props as any).history.push('/all-courses')
            })
        }
}

}
