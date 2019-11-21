import React from 'react';
import Axios from 'axios'
import { API_PATH, DATA_BANK } from '../../core.mod/proxy-service/proxy-service';
import { Link } from 'react-router-dom';
import styles  from './all-diplomas.module.scss'

export default class AllDiplomas extends React.Component<any> {
    public state: { [key: string]: string } = {};

    componentDidMount(): void {
        Axios.get(API_PATH.DIPLOMAS)
            .then(({data}) => {
                let courses;
                if (data) {
                    courses = data.diplomas.map((diploma: any) => {
                        return (
                            <div className='col s12 m4' key={diploma.id}>
                                <div className='card'>
                                    <div className={ 'card-image'}>
                                        <img className={ styles.image} src={DATA_BANK + API_PATH.IMAGE + diploma.imageUrl} alt={diploma.imageUrl}/>
                                        <span className='card-title'>{diploma.title}</span>
                                        <Link to={'/edit-diploma/' + diploma.diplomaName}
                                              className='btn-floating halfway-fab waves-effect waves-light red'><i
                                            className='material-icons'>folder_open</i></Link>
                                    </div>
                                    <div className='card-content'>
                                        <p>{diploma.shortDescription}</p>
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
                    <h5 className='title'>All Diplomas</h5>
                </div>
                <div className='row'>
                    {this.state.courses}
                </div>
            </div>
        );
    }

}
