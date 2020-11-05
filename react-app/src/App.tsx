import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export interface IAppState {
  message: string
}

class AppComponent extends Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);

    this.setState({
      message: ""
    })
  }

  // Executes after the component is rendered for the first time
  async componentDidMount() {
    // GET request using fetch with async/await
    const response = await fetch("/api/GetMessage?name='Ajit'");
    const data = await response.text();
    console.log(data);
    this.setState({ message: data })
  }

  render() {
    const { message } = this.state || {};
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React using TypeScript
          </a>
          <span>{message}</span>
        </header>
      </div>
    );
  }
}

export default AppComponent;
