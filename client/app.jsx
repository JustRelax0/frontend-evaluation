import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./style.css";
import Planetlist from "./planetlist.jsx";
import Pagenav from "./pagenav.jsx";
import Planetview from "./planetview.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
      allPlanets: [],
      view: "Planet List",
      planetSearch: "",
      currentPlanet: null,
      currentPlanetResidents: null,
      currentResident: null,
    };
    this.getPlanets = this.getPlanets.bind(this);
    this.viewChanger = this.viewChanger.bind(this);
    this.planetSearchInput = this.planetSearchInput.bind(this);
    this.planetSearch = this.planetSearch.bind(this);
    this.getAllPlanets = this.getAllPlanets.bind(this);
    this.planetListNav = this.planetListNav.bind(this);
    this.currentPlanetView = this.currentPlanetView.bind(this);
    this.planetSearchFilter = this.planetSearchFilter.bind(this);
    this.getResidents = this.getResidents.bind(this);
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
        this.setState(
          {
            planets: results.data,
            view: "Planet List",
          },
          () => {
            this.getAllPlanets();
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getAllPlanets() {
    axios
      .get("http://127.0.0.1:3000/allPlanets")
      .then((results) => {
        this.setState({
          allPlanets: results.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getResidents(planet) {
    const options = {
      method: "post",
      url: "http://127.0.0.1:3000/planetSearch",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: { data: planet },
    };

    axios(options)
      .then((results) => {
        console.log(results.data);
        this.setState(
          {
            view: "planet",
            currentPlanet: planet,
            currentPlanetResidents: results.data,
          },
          () => {
            console.log(this.state.currentPlanetResidents);
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  planetListNav() {
    this.getPlanets(1);
  }

  residentViewNav() {}

  planetSearchFilter(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (
        array[i].name
          .toLowerCase()
          .includes(this.state.planetSearch.toLowerCase())
      ) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }

  planetSearch() {
    console.log(this.state.planets);

    this.setState(
      {
        planets: this.planetSearchFilter(this.state.allPlanets),
        view: "Planet List",
      },
      () => {
        console.log(this.state.planets, this.state.planetSearch);
      }
    );
  }

  viewChanger(e) {
    this.setState(
      {
        view: e.target.innerText,
      },
      () => {
        console.log(this.state.view);
      }
    );
  }

  currentPlanetView(e) {
    console.log(e.target);
    this.setState({
      view: "planet",
      currentPlanet: e.target.innerText,
    });
  }

  planetSearchInput(e) {
    this.setState(
      {
        planetSearch: e.target.value,
      },
      () => {
        console.log(this.state.planetSearch);
      }
    );
  }

  componentDidMount() {
    this.getPlanets("1");
  }

  render() {
    if (this.state.view === "Planet List") {
      return (
        <div>
          <input
            onChange={this.planetSearchInput}
            value={this.state.planetSearch}
          ></input>
          <span>
            <button onClick={this.planetSearch}>Search for a planet</button>
          </span>
          <div>
            <span onClick={this.planetListNav}>
              <h1 className="planetListHeader">Planet List</h1>
            </span>
            <span>
              <h1 className="planetListHeader" onClick={this.currentPlanetView}>
                {this.state.currentPlanet ? this.state.currentPlanet : ""}
              </h1>
            </span>
            <span>
              <h1>
                {this.state.currentResident ? this.state.currentResident : ""}
              </h1>
            </span>
          </div>
          <div>
            <Planetlist
              planets={this.state.planets}
              currentPlanetView={this.currentPlanetView}
              getResidents={this.getResidents}
            />
            <Pagenav getPlanets={this.getPlanets} />
          </div>
        </div>
      );
    } else if (this.state.view === "planet") {
      return (
        <div>
          <input
            onChange={this.planetSearchInput}
            value={this.state.planetSearch}
          ></input>
          <span>
            <button onClick={this.planetSearch}>Search for a planet</button>
          </span>
          <div>
            <span onClick={this.planetListNav}>
              <h1 className="planetListHeader">Planet List</h1>
            </span>
            <span>
              <h1 className="planetListHeader" onClick={this.currentPlanetView}>
                {this.state.currentPlanet ? this.state.currentPlanet : ""}
              </h1>
            </span>
            <span>
              <h1>
                {this.state.currentResident ? this.state.currentResident : ""}
              </h1>
            </span>
          </div>
          <div>
            <Planetview
              name={this.state.currentPlanet}
              residents={this.state.currentPlanetResidents}
            />
          </div>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
