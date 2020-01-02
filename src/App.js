import React from "react";
import "./App.css";
import Button from "./Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "es"
    };
  }

  changeLanguage = () => {
    this.setState(state => ({
      language: state.language === "es" ? "en" : "es"
    }));
  };

  render() {
    return (
      <div className="App" data-testid="appid">
        <header className="App-header">
          <Button
            language={this.state.language}
            changeLanguage={this.changeLanguage}
          ></Button>
        </header>
      </div>
    );
  }
}

export default App;
