import React, { Component, } from 'react';


export default class Login extends Component {
    public state = {data: null};

    render(): React.ReactNode {
        return (
            <React.Fragment>
                <form className="login-form">
                    <div className="row">
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">mail_outline</i>
                            <input className="validate" id="email" type="email"/>
                                <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">lock_outline</i>
                            <input id="password" type="password"/>
                                <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 m12 l12  login-text">
                            <input type="checkbox" id="remember-me"/>
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <button className="btn waves-effect waves-light col s12">Login</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6 m6 l6">
                            <p className="margin medium-small"><button>Register Now!</button></p>
                        </div>
                        <div className="input-field col s6 m6 l6">
                            <p className="margin right-align medium-small"><a href="/">Forgot password?</a></p>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}
