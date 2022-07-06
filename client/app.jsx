import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./style.css";
import Planetlist from "./planetlist.jsx";
import Pagenav from "./pagenav.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
    };
    this.getPlanets = this.getPlanets.bind(this);
  }

  getPlanets(page) {
    const options = {
      method: "post",
      url: "http://127.0.0.1:3000/planets",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: { data: page },
    };

    axios(options)
      .then((results) => {
        this.setState({
          planets: results.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getPlanets("1");
  }

  render() {
    return (
      <div>
        <Planetlist planets={this.state.planets} />
        <Pagenav getPlanets={this.getPlanets} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
