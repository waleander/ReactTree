import React from 'react';
import App from './countdown';
import Link from './Link';
import ClickyButton from './ButtonClick';
import Reload from './Reload';
import ComponentEvent from './ComponentEvent';

let content = {
    first: "Home",
    second: "About",
    third: "Project"
}

function Ancestor1(props) {
    return (
        <div>
            <App onClick={ props.onClick} clicks={props.clicks } />
            <Link content={ content } />
            <ClickyButton numberOfButtons={ 50 } onSelection={(id) => { console.log("button clicked" + id) }} />
            <Reload />
            <ComponentEvent onEvenClick={ (data) => {
                console.log(`even ${ data } `);
            } }/>
        </div>
    );
}

export default Ancestor1;