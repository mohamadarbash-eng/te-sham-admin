import React, { Component } from 'react';
import Axios from 'axios';

declare const M: any;

interface ImageInterface {
    changed: (val: string) => void,
    config: {[key:string]: string}
}



export default class SelectImage extends Component<ImageInterface> {
    public instance: any;
    public imagesLink: { [key: string]: string }[] = [];
    public state: any;

    constructor(props: any) {
        super(props);
        this.state = {
            images: []
        };
    }

    public componentDidMount(): void {
        const elem: Element | null = document.querySelector('.modal');
        this.instance = M.Modal.init(elem);
    }

    public onSelectImage(image: string): void {
        this.props.changed(image);
        this.instance.close();
    }

    public async onClickOpenModal(e: MouseEvent) {
        e.preventDefault();
        e.stopPropagation();
        const {data} = await Axios.get('/api/image/link');
        this.imagesLink = data && data.imagesLink;
        const images = this.imagesLink.map((image) => {
            return <img
                key={image.id}
                onClick={() => this.onSelectImage(image.name)}
                style={{ maxHeight: '150px', minHeight: '150px'}}
                className='col l4 m6 s12'
                alt={image.name}
                src={'http://localhost:3000/assets/images/' + image.name}/>
        });
        this.setState(() => {
            return {
                images
            }
        });
        this.instance.open()
    }

    render(): React.ReactNode {
        return (
            <div>
                <button
                    {...this.props.config.button}
                    onClick={(e: any) => this.onClickOpenModal(e)}
                   className={this.props.config.className}
                >
                    {this.props.config.buttonLabel}
                </button>

                <div id="modal1" className="modal">
                    <div className="modal-content">
                            <div className='row'>
                                {this.state.images}
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
