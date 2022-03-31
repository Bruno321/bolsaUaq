import React from 'react';
import ReactDOM  from 'react-dom';
import {App} from './app'
import Context from './Context/LoginContext'

ReactDOM.render(
    <Context.Provider>
        <App/>
    </Context.Provider>
,
    document.getElementById('app'))