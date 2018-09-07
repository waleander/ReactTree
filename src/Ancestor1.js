import React from 'react';
import App from './countdown';
import Link from './Link';

let content = {
    first: "Home",
    second: "About",
    third: "Project"
}

function Ancestor1(props) {
    return (
        <body style={{ backgroundColor: "blue" }}>
            <App onClick={props.onClick} clicks={props.clicks} />
            <Link content={content} />

        </body>

    );
}

export default Ancestor1;