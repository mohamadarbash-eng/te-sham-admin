import React from 'react';
import './App.css';
import Main from './main/main';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/sass/materialize.scss'
import 'materialize-css'
import './draft.css';
import 'draft-js/dist/Draft.css';
const App: React.FC = () => {
  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}

export default App;
