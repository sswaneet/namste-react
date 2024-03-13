import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userInfo :{
            name: "user",
            url: "https://api.github.com/users/",
            location: "India"
        }
    };
  }

 async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sswaneet")
    const jsonUserData = await data.json();

    console.log(jsonUserData);
    this.setState({
        userInfo : jsonUserData,
    });
  }


  render() {
    const { name, url, location , avatar_url} = this.state.userInfo;
    return (
    <div className="user-card-container">
        <img className="avatar-image" src={avatar_url}/>
        <div className="user-card">
        <h4>Name: {name}</h4>
        <h4>Github url: {url}</h4>
        <h4>Location: {location}</h4>
      </div>
    </div>
      
    );
  }
}

export default UserClass;
