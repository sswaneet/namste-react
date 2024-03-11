import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count1: 1,
    };
  }
  render() {
    const { contact } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          click here to increase count
        </button>
        <h1>count1: {this.state.count1}</h1>
        <h4>Name: {this.props.name}</h4>
        <h4>Contact: {contact}</h4>
        <h4>Designation: SDE II</h4>
      </div>
    );
  }
}

export default UserClass;
