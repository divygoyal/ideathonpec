import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App  from './App';
import * as serviceWorker from './serviceWorker';
import NavBar from './components/NavBar';
import Body from './components/Body';





ReactDOM.render(<>
    <div>
        <NavBar/>
        <Body/>
    </div>
    <div className = "dgoyal">
        <App />
    </div>
    
    <App />
</>, document.getElementById('root'));


serviceWorker.unregister();
