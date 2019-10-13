import React, { Component } from 'react';
import Axios from 'axios';

import { Input } from '../components/input/input';
import SelectImage from '../components/image/select-image';
import TextRichEditor from '../components/text-editor/text-rich-editor';
import { validatorsControl } from '../core.mod/vaidators/validators-control';
import { formControlsValidator } from '../core.mod/vaidators/validators';
import { cloneDeep } from 'lodash';
import { NEW_DIPLOMA_CONTROLS } from '../core.mod/vaidators/new-diploma-controls';

declare const M: any;


export default abstract class AbstractDiplomaDetails extends Component {
    public state: any = {
        formControls: {
            ...cloneDeep(NEW_DIPLOMA_CONTROLS),
        },
        formValid: false,
        previewImage: null,
        imageUrl: null,
        saveButtonLabel: null,
        pageTitle: null
    };
    public instance: any;

    /**
     * saveCourse will save newCourse or update existing diploma
     */
    public abstract saveCourse(): void;

    componentDidMount(): void {
        M.updateTextFields();
    }

    public mapCourseData(): { [key: string]: string } {
        let formData: { [key: string]: string } = {};
        const {formControls} = this.state;
        for (const control in formControls) {
            if (formControls[control].value !== undefined) {
                formData[control] = formControls[control].value;
            } else {
                formData = {
                    ...formData,
                    [control]: {
                        ...this.spreadSubForm(formControls[control])
                    }
                }
            }
        }
        return formData;
    }


    public spreadSubForm(formControl: any): any {
        let formData: { [key: string]: string } = {};
        for (const control in formControl) {
            if (formControl[control].value !== undefined) {
                formData[control] = formControl[control].value;
            }
        }
        return formData;
    }

    public handleChangeImage(event: any) {
        const files = event.target.files;
        const formData: FormData = new FormData();
        const fileReader = new FileReader();
        //this.handleChangeFormControls(name, files[0]);
        formData.append('image', files[0]);
        Axios.post('/api/image', formData).then((data) => {
            this.setState(() => {
                return {
                    formControls: {
                        ...this.state.formControls,
                        imageUrl: {
                            ...this.state.formControls.imageUrl,
                            value: data.data.imageName
                        }
                    },
                }
            });
        });

        fileReader.onloadend = () => {
            this.setState({
                previewImage:
                    <div className={'row'}>
                        <div className={'col l12'}>
                            <img className={'materialboxed'}
                                 style={{maxWidth: '100%', maxHeight: '300px', width: '100%'}}
                                 src={fileReader.result as string} alt=""/>
                        </div>
                    </div>
            })
        };
        fileReader.readAsDataURL(files[0]);
    }


    // TODO 'handle default image'
    public onSelectImage(image: string): void {
        this.setState(() => {
            return {
                formControls: {
                    ...this.state.formControls,
                    imageUrl: {
                        ...this.state.formControls.imageUrl,
                        value: image
                    }
                },
                previewImage: image

            }
        }, () => {
            const elem = document.querySelector('.materialboxed');
            this.instance = M.Materialbox.init(elem);
        });
    }


    public deletePreviewImage() {
        this.setState(() => {
            return {
                formControls: {
                    ...this.state.formControls,
                    imageUrl: {
                        ...this.state.formControls.imageUrl,
                        value: null
                    }
                },
                previewImage: null
            }
        });
    }


    public handleChangeText(event: any) {
        const name = event.target.name;
        const value = event.target.value;
        this.handleChangeFormControls(name, value);
    }

    public handleChangeSubFormControls(name: string, value: string, subControl: string) {
        const updatedControls: any = {
            ...this.state.formControls[subControl]
        };

        const updatedFormElement = {
            ...updatedControls[name]
        };
        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = validatorsControl(value, updatedControls[name].rules);
        updatedControls[name] = updatedFormElement;


        this.setState(() => {
            return {
                formControls: {
                    ...this.state.formControls,
                    [subControl]: {
                        ...updatedControls,

                    }
                }
            }
        }, () => {
            const formValid = formControlsValidator(this.state.formControls);
            this.setState({
                formValid
            });
        });
    }


    public handleChangeFormControls(name: string, value: string) {
        const updatedControls: any = {
            ...this.state.formControls
        };

        const updatedFormElement = {
            ...updatedControls[name]
        };
        updatedFormElement.value = value;
        updatedFormElement.touched = true;

        updatedControls[name] = updatedFormElement;
        updatedControls[name].valid = validatorsControl(value, updatedControls[name].rules);

        this.setState(() => {
            return {
                formControls: updatedControls,
            }
        }, () => {
            const formValid = formControlsValidator(this.state.formControls);
            this.setState({
                formValid
            });
        });
    }

    render(): React.ReactNode {
        let previewImage = undefined;
        if (this.state.formControls.imageUrl.value) {
            previewImage = <div className='row'>
                <div className='col l12'>
                    <img
                        className='materialboxed'
                        onClick={() => this.instance.open()}
                        style={{maxWidth: '100%', maxHeight: '300px', width: '100%'}}
                        src={'http://localhost:3000/assets/images/' + this.state.formControls.imageUrl.value}
                        alt={this.state.previewImage}/>
                </div>
            </div>;
        }
        return (
            <div className='container'>
                <div className='row'>
                    <h5 className='title'>{this.state.pageTitle}</h5>
                </div>
                <div className="row">
                    <Input config={this.state.formControls.diplomaName}
                           changed={(event: any) => this.handleChangeText(event)}/>
                    <Input config={this.state.formControls.title}
                           changed={(event: any) => this.handleChangeText(event)}/>
                    <Input config={this.state.formControls.category}
                           changed={(event: any) => this.handleChangeText(event)}/>
                </div>
                <div className="row">
                    <Input config={this.state.formControls.imageAlt}
                           changed={(event: any) => this.handleChangeText(event)}/>
                    <Input config={this.state.formControls.imageTitle}
                           changed={(event: any) => this.handleChangeText(event)}/>
                </div>
                <div className='row'>
                    <div className='col l4 m6 s12'>
                        <SelectImage config={this.state.formControls.imageUrl}
                                     changed={(image) => this.onSelectImage(image)}>

                        </SelectImage>
                    </div>
                    <div className='col l4 m6 s12'>
                        <button className='btn' onClick={() => this.deletePreviewImage()}>Delete Image</button>
                    </div>
                </div>
                {previewImage}
                <div className="row">
                    <Input config={this.state.formControls.price}
                           changed={(event: any) => this.handleChangeText(event)}/>
                </div>
                <label>Description</label>
                <div className="row">
                    <TextRichEditor
                        htmlText={this.state.formControls.diplomaDetails.diplomaDescription.value}
                        changed={(event: any) => {
                            this.handleChangeSubFormControls('diplomaDescription', event, 'diplomaDetails')
                        }}>
                    </TextRichEditor>
                </div>

                <div className="row">
                    <label>curriculum</label>
                    <TextRichEditor
                        htmlText={this.state.formControls.diplomaDetails.curriculum.value}
                        changed={(event: any) => {
                            this.handleChangeSubFormControls('curriculum', event, 'diplomaDetails')
                        }}>
                    </TextRichEditor>
                </div>
                <div className="row">
                    <button className='btn' disabled={!this.state.formValid} onClick={() => this.saveCourse()}>
                        {this.state.saveButtonLabel}
                    </button>
                </div>
            </div>

        );
    }

}