// class based component (it is just a normal javascript class)
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    //state variable in class based component
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="user-card">
        <h1>count:{this.state.count}</h1>
        <button
          onClick={() => {
            //NEVER DIRECTLY UPDATE YOUR STATE VARIABLES
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count++
        </button>
        <h2>Name : {this.props.name}</h2>
        <h3>Location: Bengaluru</h3>
        <h4>Conatct : @Loke000</h4>
      </div>
    );
  }
}

export default UserClass;
