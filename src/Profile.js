import React from "react";


class Profile extends React.Component {

    componentDidMount() {
        this.props.reset();
    }
    


    render() {
      return (
          <>
        <div className="card" style={{width: "18rem"}}>
            <img src ={this.props.user.imgSrc} alt="..." />
            <div class="card-body">
                <h5 className="card-title">{this.props.user.fullName}</h5>
                <h4 className="card-title">{this.props.user.profession}</h4>
                <p className="card-text">{this.props.user.bio}</p>
                
            </div>
        </div>
    
        
        </>
        );
    }
  }

export default Profile