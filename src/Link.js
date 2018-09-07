import React from 'react';


function Link(props) {
    let styl = {
        fontWeight: "bolder",
        color: "white",
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    }
    
    const range = Object.keys(props.content);
    const cnt = range.map( (el,i) =>
        <a href="" style={{ ...styl }}>{el}</a>
    );
    return (
        <div className="App" style={{ height: 50, backgroundColor: "purple", border: "4px solid brown", padding: 5 }}>
            {cnt}
        </div>
    );
}


export default Link;