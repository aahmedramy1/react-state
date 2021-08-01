import React from 'react';
import ReactDOM from 'react-dom';
import Profile from "./Profile"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Elon Musk",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, repudiandae!",
        imgSrc: "/ElonMusk.jpg",
        profession: "Software Engineer"
      },
      shows: false,
      date: 0
    };
  }

  handleCallBack = (childData) => {
    this.setState({date: childData})
  }

  tick() {
    this.setState({
        date: this.state.date + 1
    });
  }


reset = () =>
{
  clearInterval(this.timerID);
  this.setState({date: 0});
  this.timerID = setInterval(
    () => this.tick(),
    1000);
}

  handleClick=()=>this.setState({shows:!this.state.shows})
  render() {
    return (
        <div className = "d-flex flex-column justify-content-center align-items-center">
          <button type="button" className ="btn btn-primary" onClick = {this.handleClick}>{ this.state.shows ? "Hide Profile" : "Show Profile"}</button>
          {this.state.shows && <Profile user = {this.state.person} reset = {this.reset} />}
          <h2> It has been {this.state.date}. </h2>
        </div>
      );
  }
}

export default App;