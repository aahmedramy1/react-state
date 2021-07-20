import React from "react";

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          date: this.props.time
        };
      }

    tick() {
        this.setState({
            date: this.state.date + 1
        });
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }


    render() {
        return ( <h2> It has been {this.state.date}. </h2>
        )
    }
}

export default Clock