import React from "react";

class ComponentEvent extends React.Component {
    constructor ( props ) {
        super(props);
        this.state = { clicks: 9 };
        this.clickHandler = this.clickHandler.bind(this);
    } 

    clickHandler (event) {        
        const clicksNew = this.state.clicks + 1;
        this.setState = ({ clicks: clicksNew });
        console.log(clicksNew)
        if ( clicksNew % 2 === 0 ) {            
            this.props.onEvenClick(clicksNew);
        }
    }

    render() {
        return(
            <div onClick={ this.clickHandler }>
               This div has been clicked { this.state.clicks } times.
            </div>
        )
    }
}

export default ComponentEvent;