import React from "react";

class QuoteBox extends React.Component {
	render() {
		return (
			<div id="quote-box">
				<p id="text">{this.props.data.text}</p>
				<p id="author">{this.props.data.author}</p>
				<button id="new-quote" onClick={this.props.handleChange}>
					New quote
				</button>
				<button id="tweet-quote">Tweet quote</button>
			</div>
		);
	}
}

export default QuoteBox;
