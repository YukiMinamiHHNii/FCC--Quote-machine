import React from "react";

class QuoteBox extends React.Component {
	render() {
		return (
			<div id="quote-box">
				<p id="text">{this.props.data.text}</p>
				<p id="author">― {this.props.data.author}</p>
				<a id="new-quote" href="#newQuote" onClick={this.props.handleChange}>New quote</a>
				<a id="tweet-quote" href={`http://twitter.com/intent/tweet?text= "${this.props.data.text}" ― ${this.props.data.author}`}>Tweet quote</a>
			</div>
		);
	}
}

export default QuoteBox;
