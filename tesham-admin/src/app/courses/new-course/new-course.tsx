import React, { Component } from 'react';
import { Input } from '../../components/input/input';
import { validatorsControl } from '../../core.mod/vaidators/validators-control';
import EditorConvertToHTML from '../../components/text-editor/text-rich-editor';
import { formControlsValidator } from '../../core.mod/vaidators/validators';
import Axios from 'axios';
import SelectImage from '../../components/image/select-image';

declare const M: any;

// TODO outsource
const inputConfig = {
    courseName: {
        input: {
            id: 'courseName',
            type: 'text',
            name: 'courseName'
        },
        className: 'input-field col l4 m6 s12',
        inputLabel: 'course Name',
        value: '',
        touched: false,
        rules: {
            minLength: {
                value: 4,
                message: 'hiii'
            }
        },
        valid: {
            value: true,
            message: ''
        },

    },
    title: {
        input: {
            id: 'title',
            type: 'text',
            name: 'title'
        },
        className: 'input-field col l4 m6 s12',
        inputLabel: 'Title',
        value: '',
        touched: false,
        rules: {
            minLength: {
                value: 4,
                message: 'hiii'
            }
        },
        valid: {
            value: true,
            message: ''
        },
    },
    category: {
        input: {
            id: 'category',
            type: 'text',
            name: 'category'
        },
        className: 'input-field col l4 m6 s12',
        inputLabel: 'Category',
        value: '',
        touched: false,
        rules: {
            minLength: {
                value: 4,
                message: 'hiii'
            }
        },
        valid: {
            value: true,
            message: ''
        },
    },
    shortDescription: {
        input: {
            id: 'shortDescription',
            type: 'text',
            name: 'shortDescription'
        },
        className: 'input-field col l4 m6 s12',
        inputLabel: 'Short Description',
        value: 'jjjjjjjjj',
        touched: false,
        rules: {},
        valid: {
            value: true,
            message: ''
        },
    },
    imageAlt: {
        input: {
            id: 'imageAlt',
            type: 'text',
            name: 'imageAlt'
        },
        className: 'input-field col l4 m6 s12',
        inputLabel: 'image Alt',
        value: '',
        touched: false,
        rules: {
            minLength: {
                value: 4,
                message: 'hiii'
            }
        },
        valid: {
            value: true,
            message: ''
        },
    },
    imageTitle: {
        input: {
            id: 'imageTitle',
            type: 'text',
            name: 'imageTitle'
        },
        className: 'input-field col l4 m6 s12',
        inputLabel: 'image Title',
        value: '',
        touched: false,
        rules: {
            minLength: {
                value: 4,
                message: 'hiii'
            }
        },
        valid: {
            value: true,
            message: ''
        },
    },
    imageUrl: {
        button: {
            id: 'imageUrl',
            type: 'button',
            name: 'imageUrl',
            hidden: false
        },
        className: 'waves-effect waves-light btn modal-trigger',
        buttonLabel: 'Select Image',
        value: '',
        touched: false,
        rules: {},
        valid: {
            value: true,
            message: ''
        },
    },
    price: {
        input: {
            id: 'price',
            type: 'text',
            name: 'price'
        },
        className: 'input-field col l4 m6 s12',
        inputLabel: 'Price',
        value: '',
        touched: false,
        rules: {
            minLength: {
                value: 4,
                message: 'hiii'
            }
        },
        valid: {
            value: true,
            message: ''
        },
    },
    courseDetails: {
        courseDescription: {
            textEditor: {
                id: 'courseDescription',
                type: 'text',
                name: 'courseDescription'
            },
            className: 'input-field col l4 m6 s12',
            editorHeader: 'Course Description',
            value: '',
            touched: false,
            rules: {},
            valid: {
                value: true,
                message: ''
            },
        },
        curriculum: {
            textEditor: {
                id: 'courseDescription',
                type: 'text',
                name: 'courseDescription'
            },
            className: 'input-field col l4 m6 s12',
            editorHeader: 'Course Description',
            value: '',
            touched: false,
            rules: {},
            valid: {
                value: true,
                message: ''
            },
        },
        medias: {
            textEditor: {
                id: 'courseDescription',
                type: 'text',
                name: 'courseDescription'
            },
            className: 'input-field col l4 m6 s12',
            editorHeader: 'Course Description',
            value: [],
            touched: false,
            rules: {},
            valid: {
                value: true,
                message: ''
            },
        },
    }
};


export default class NewCourse extends Component {
    public state: any;
    public instance: any;

    constructor(props: any) {
        super(props)
        this.state = {
            formControls: {
                ...inputConfig,
            },
            formValid: false,
            previewImage: null,
            imageUrl: null
        }

    }

    componentDidMount(): void {
        M.updateTextFields()
    }

    public saveCourse(): void {
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

        Axios.post('/api/course', formData).then((data) => {
            console.log(data)
        })
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
        const fileReader  = new FileReader();
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
                            <img className={'materialboxed'} style={{maxWidth: '100%', maxHeight: '300px', width: '100%'}}
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
                previewImage:
                    <div className='row'>
                        <div className='col l12'>
                            <img
                                className='materialboxed'
                                onClick={()=> this.instance.open()}
                                style={{maxWidth: '100%', maxHeight: '300px', width: '100%'}}
                                src={'http://localhost:3000/assets/images/' + image}
                                alt={image}/>
                        </div>
                    </div>
            }
        }, ()=> {
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
     /*   Axios.delete(`/api/image/${this.state.formControls.imageUrl.value}`).then((response)=> {
            console.log(response);

            }
        )*/
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

        return (
            <div className='container'>
                <div className='row'>
                    <h5 className='title'>New Course</h5>
                </div>
                <div className="row">
                    <Input config={this.state.formControls.courseName}
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
                                     changed={(image)=> this.onSelectImage(image)}>

                        </SelectImage>
                    </div>
                    <div className='col l4 m6 s12'>
                        <button className='btn' onClick={()=> this.deletePreviewImage()}>Delete Image</button>
                    </div>
                </div>
                {this.state.previewImage}
                <div className="row">
                    <Input config={this.state.formControls.price}
                           changed={(event: any) => this.handleChangeText(event)}/>
                </div>
                <label>Description</label>
                <div className="row">
                    <EditorConvertToHTML
                        changed={(event: any) => {
                            this.handleChangeSubFormControls('courseDescription', event, 'courseDetails')
                        }}>
                    </EditorConvertToHTML>
                </div>

                <div className="row">
                    <label>curriculum</label>
                    <EditorConvertToHTML
                        changed={(event: any) => {
                            this.handleChangeSubFormControls('curriculum', event, 'courseDetails')
                        }}>
                    </EditorConvertToHTML>
                </div>
                <div className="row">
                    <button className='btn' disabled={!this.state.formValid} onClick={() => this.saveCourse()}>Save
                    </button>
                </div>
            </div>

        );
    }


}
