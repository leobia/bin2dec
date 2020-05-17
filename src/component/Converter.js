import React from "react";

export default class Converter extends React.Component {

    constructor(props) {
        super(props);
        this.calcDecimal = this.calcDecimal.bind(this)
    }

    calcDecimal(input) {
        let result = 0;
        for (let i = 0; i < input.length; i++) {
            result += Math.pow(2, i) * input[input.length - 1 - i];
        }
        return result;
    }

    render() {
        return (
            <p>{this.calcDecimal(this.props.input)}</p>
        );
    }
}
