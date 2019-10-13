export const  NEW_DIPLOMA_CONTROLS = {
    diplomaName: {
        input: {
            id: 'diplomaName',
            type: 'text',
            name: 'diplomaName'
        },
        className: 'input-field col l4 m6 s12',
        inputLabel: 'Diploma Name',
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
    diplomaDetails: {
        diplomaDescription: {
            textEditor: {
                id: 'diplomaDescription',
                type: 'text',
                name: 'diplomaDescription'
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
                id: 'diplomaDescription',
                type: 'text',
                name: 'diplomaDescription'
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
                id: 'diplomaDescription',
                type: 'text',
                name: 'diplomaDescription'
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