import React from 'react';
import ReactDOM  from 'react-dom';
import {App} from './app'
import Context from './Context/LoginContext'
import DetailContext from './Context/DetailContext'
import DataToShowContext from './Context/DataToShowContext'
import RegisterContext from './Context/RegisterContext'

ReactDOM.render(
    <Context.Provider>
        <DetailContext.Provider>
            <DataToShowContext.Provider>
                <RegisterContext.Provider>
                    <App/>
                </RegisterContext.Provider>
            </DataToShowContext.Provider>
        </DetailContext.Provider>
    </Context.Provider>
,
    document.getElementById('app'))