import React from 'react'
import { Link } from 'react-router-dom';


export default class ErrorPage extends React.Component {


    render(): React.ReactNode {
            return (
                   <div>
                       <h1>Something went wrong</h1>
                       <Link className={'waves-effect waves-light btn'} to={'/'}>GO to Homepage</Link>
                   </div>
            );
    }
}
