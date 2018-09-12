import React from "react";


class Reload extends React.Component {
    constructor (props) {
        super(props);
        this.state = { content: "" }
        this.onChar = this.onChar.bind(this);
        this.onGoTime = this.onGoTime.bind(this);
    }


    onChar (event) {
        this.setState({ content: event.target.value });
    }
    
    onGoTime (event) {
        if (this.state.content !== "reload") {
            event.stopPropagation();
            event.preventDefault();
        }
    }

    render () {
        return (
            <form onSubmit={ this.onGoTime }>
                <input type="text" value={ this.state.content } onChange={ this.onChar } />
                <input type="submit"  value="Gotime" />
            </form>
        )
    }
}

export default Reload;