import Axios from 'axios';
import AbstractDiplomaDetails from '../abstract-diploma-details';
import { cloneDeep } from 'lodash';
import { API_PATH } from '../../core.mod/proxy-service/proxy-service';
import { DiplomaInterface } from '../interfaces/diploma-interfaces';

declare const M: any;

export default class EditDiploma extends AbstractDiplomaDetails {
    public diplomaID: DiplomaInterface['id'] = '';

    componentDidMount(): void {
        this.setState({
            saveButtonLabel: 'Update',
            pageTitle: 'Edit Diploma'
        });
        Axios.get<DiplomaInterface>(API_PATH.EDIT_DIPLOMA + (this.props as any).match.params.diplomaName).then(({data}) => {
            this.diplomaID = data.id;
            console.log(data);
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
        if (this.diplomaID) {
            Axios.put('/api/diploma/' + this.diplomaID, this.mapCourseData()).then((data) => {
               // TODO handel the response / or error
            })
        }
    }

}