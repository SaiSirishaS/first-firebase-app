import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

import firebase from "./firebase.js";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Login extends React.Component {
  state = {
    name: "",
    age: "",
    userDetails: []
  };

  componentDidMount() {
    const userRef = firebase.database().ref("Login");
    userRef.on("value", snapshot => {
      let users = snapshot.val();
      let userDetails = [];
      for (let user in users) {
        userDetails.push({
          id: user.id,
          name: user.name,
          age: user.age
        });
      }
      this.setState({
        userDetails: userDetails
      });
    });
  }

  onNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  onAgeChane = e => {
    this.setState({
      age: e.target.value
    });
  };

  onSubmit = e => {
    const { name, age } = this.state;
    e.preventDefault();
    let details = firebase.database().ref("Login");
    let newDetails = { name: name, age: age };
    details.push(newDetails);
    this.setState({
      name: "",
      age: ""
    });
  };

  render() {
    const { name, age, userDetails } = this.state;
    return (
      <div>
        <div>
          <Hello name="Welcome" />
        </div>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              type="text"
              value={name}
              placeholder="enter your name"
              onChange={this.onNameChange}
            />
          </div>
          <div>
            <input
              type="text"
              value={age}
              placeholder="enter your age"
              onChange={this.onAgeChane}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            {userDetails &&
              userDetails.length > 0 &&
              userDetails.map(x => {
                return (
                  <tbody>
                    <tr key={x.id}>
                      <td>{x.name}</td>
                      <td>{x.age}</td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      </div>
    );
  }
}

/*const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);*/

render(<Login />, document.getElementById("root"));
