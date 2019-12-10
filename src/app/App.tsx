import React, { Component } from 'react';
import { BrowserRouter, } from 'react-router-dom';
import './App.scss';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/sass/materialize.scss'
import 'materialize-css'
import './draft.css';
import 'draft-js/dist/Draft.css';
import Homepage from './homepage/homepage';


export default class App extends Component {


render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
   return (<BrowserRouter basename="/">
        <div className="App">
              <Homepage></Homepage>
        </div>
    </BrowserRouter>
);
}
}

