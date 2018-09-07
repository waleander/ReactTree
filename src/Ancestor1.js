import React from 'react';
import App from './countdown';


function Ancestor1(props) {
    return(
        <body style={{backgroundColor: "blue"}}>
           <App onClick={props.onClick} clicks={props.clicks}/>
        </body>
        
    );
}

export default Ancestor1;