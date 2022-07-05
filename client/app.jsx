import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './style.css';


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>hi</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));