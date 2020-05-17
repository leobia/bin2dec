import React from "react";
import "./App.css";
import Converter from "./Converter";

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            binaryInput: ""
        };
        this.handleBinaryChange = this.handleBinaryChange.bind(this)
    }

    handleBinaryChange(event) {
        let eventValue = event.target.value;
        let values = eventValue.match(/[01]/g);
        if (values != null) {
            this.setState({binaryInput: values.join("")})
        } else {
            this.setState({binaryInput: ""})
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Binary to Decimal</h1>
                <input className="item" value={this.state.binaryInput} onChange={this.handleBinaryChange} maxLength={64} placeholder="Enter binary"/>
                <Converter className="item" input={this.state.binaryInput}/>
            </div>
        );
    }

}
