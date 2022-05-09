import React from 'react';
import ReactDOM  from 'react-dom';
import {App} from './app'
import Context from './Context/LoginContext'
import DetailContext from './Context/DetailContext'
import DataToShowContext from './Context/DataToShowContext'

ReactDOM.render(
    <Context.Provider>
        <DetailContext.Provider>
            <DataToShowContext.Provider>
                <App/>
            </DataToShowContext.Provider>
        </DetailContext.Provider>
    </Context.Provider>
,
    document.getElementById('app'))