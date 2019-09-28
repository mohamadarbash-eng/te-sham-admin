import React from 'react';
import Axios from 'axios';
import  AbstractCourseDetails  from '../abstract-course-details';
import { cloneDeep } from 'lodash';
import { itemType } from '../../../../../tesham-client/src/app/utility.mod/breadcrumb-pages/components/breadcrumb-pages.component';

export default class EditCourse extends AbstractCourseDetails {
public courseID: string = '';

    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {
        this.setState({
                saveButtonLabel: 'Update',
                pageTitle: 'Edit Course'
        });
        Axios.get('/api/course/details/' + (this.props as any).match.params.courseName).then(({data}) => {
            this.courseID = data.id;
            // TODO fix it
            let formControls = cloneDeep(this.state.formControls);
            for(const item in data) {
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
                        if (formControls[item] && formControls[item].value !== undefined) {
                            formControls[item].value = data[item];
                        }
                    }
                }
            }
            this.setState({
                formControls: formControls
            })
        });

    }

    public spreadData(formControl: any, nestedData: any): any {
        for (const nestedItem in nestedData) {
                if (formControl[nestedItem] && formControl[nestedItem].value !== undefined) {
                    (formControl[nestedItem] as any).value = nestedData[nestedItem];
                    console.log('nestedData[nestedItem]', nestedData[nestedItem])
            }
        }
        console.log(formControl);
        return formControl;
    }

    public saveCourse(): void {
     if (this.courseID) {
         Axios.put('/api/course/' + this.courseID, this.mapCourseData()).then((data) => {
             console.log(data)
         })
     }
    }

}