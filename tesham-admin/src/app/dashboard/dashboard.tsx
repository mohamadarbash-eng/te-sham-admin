import React from 'react';
import Main from '../main/main';
import Styles from './dashboard.module.scss';
import { Link } from 'react-router-dom';

declare const M: any;

export class Dashboard extends React.Component<any> {
    public state: any;

    componentDidMount(): void {
        const sidenav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenav);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (<div>
                <nav className={Styles.teAppMain}>
                    <div className='nav-wrapper'>
                        <Link to='/' className='brand-logo'>Logo</Link>
                        <ul id='nav-mobile' className='right hide-on-med-and-down'>
                            <li><a href='sass.html'>Sass</a></li>
                        </ul>
                    </div>
                </nav>
                <ul id='slide-out' className='sidenav sidenav-fixed'>
                    <li>
                        <div className='user-view'>
                            <div className='background'>
                            </div>
                            <a href='#email'><span className='white-text email'>jdandturk@gmail.com</span></a>
                        </div>
                    </li>
                    <li><a href='#!'><i className='material-icons'>cloud</i>First Link With Icon</a></li>
                    <li>
                        <div className='divider'></div>
                    </li>
                    <li><Link to='/new-course'>New Course</Link></li>
                    <li><Link to='/all-courses'>All Courses</Link></li>
                    <li><Link to='/new-diploma'>New Diploma</Link></li>
                    <li><Link to='/all-diplomas'>All Diplomas</Link></li>
                </ul>
                <div className={Styles.teAppMain}>
                    <Main></Main>
                </div>
            </div>
        );
    }
}