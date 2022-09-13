import React from 'react';
import ReactDOM from 'react-dom/client'
import { Counterapp } from './Counterapp';
import { FirstApp } from './FirstApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title="The Batman" subTitle="The Dark Knight" /> */}
        <Counterapp value={10}/>
    </React.StrictMode>

);