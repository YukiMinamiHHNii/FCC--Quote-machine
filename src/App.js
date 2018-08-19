import React from "react";
import QuoteBox from "./QuoteBox.js";

const quotes = [
	{ quote: "aaa", author: "aaa-auth" },
	{ quote: "bbb", author: "bbb-auth" },
	{ quote: "ccc", author: "ccc-auth" },
	{ quote: "ddd", author: "ddd-auth" },
	{ quote: "eee", author: "eee-auth" },
	{ quote: "fff", author: "fff-auth" },
	{ quote: "ggg", author: "ggg-auth" },
	{ quote: "hhh", author: "hhh-auth" },
	{ quote: "iii", author: "iii-auth" },
	{ quote: "jjj", author: "jjj-auth" }
];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 0,
			author: 0
		};
		this.testFunction = this.testFunction.bind(this);
	}

	testFunction() {
		let index = Math.floor(Math.random() * Math.floor(quotes.length)),
			newProps = quotes[index];

		return this.setState({
			text: newProps.quote,
			author: newProps.author
		});
	}

	render() {
		return <QuoteBox data={this.state} handleChange={this.testFunction} />;
	}
}

export default App;
