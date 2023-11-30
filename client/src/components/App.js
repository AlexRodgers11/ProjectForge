import React, { Component } from "react";
import FMEADisplay from "./displays/FMEADisplay/FMEADisplay";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <FMEADisplay />
            </div>
        );
    }
}

export default App;