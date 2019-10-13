import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Dashboard } from './dashboard/dashboard';

import './App.scss';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/sass/materialize.scss'
import 'materialize-css'
import './draft.css';
import 'draft-js/dist/Draft.css';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Dashboard></Dashboard>
            </div>
        </BrowserRouter>
    );
}

export default App;
