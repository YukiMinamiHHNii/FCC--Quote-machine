import React from "react";
import QuoteBox from "./QuoteBox.js";

const quotes = [
	{ text: "The ones who accomplish something are the fools who keep pressing onward. The ones who accomplish nothing are the wise who cease advancing.", author: "Arfornia Celica" },
	{ text: "Friendship is unnecessary, like philosophy, like art. It has no survival value. Rather it is one of those things that give value to survival.", author: "Shana" },
	{ text: "Problems that cannot be solved do not exist in this world.", author: "Nagato Yuki" },
	{ text: "I consider everything that happened to be precious moments of my life. The pain. The suffering. The fun… And I am here right now, because everyone was there for me. I couldn't have accomplished anything by standing still, without anybody's help. I treasure every moment I have spent here. Unlucky? I feel pretty lucky. This is my resolve.", author: "Sawada Tsunayoshi" },
	{ text: "Even though I've lost my way, I will save you.", author: "Akemi Homura" },
	{ text: "Dreams start by believing.", author: "Suzumiya Haruhi" },
	{ text: "You're absolutely right. I can't do anything alone. Everyone has their flaws and imperfections, but that's what drives us to work together... To make up for those flaws. Together, we make the perfect main character. ", author: "Sakata Gintoki" },
	{ text: "It's meaningless to just live, and it's meaningless to just fight. I want to win.", author: "Kurosaki Ichigo" },
	{ text: "Being alone is more painful than getting hurt.", author: "Monkey D. Luffy" },
	{ text: "There's no such thing as a painless lesson, they just don't exist. Sacrifices are necessary, you can't gain something without losing something first... Although if you can endure that pain and walk away from it, you'll find that you now have a heart strong enough to overcome any obstacle... Yeah... A Fullmetal Heart.", author: "Edward Elric" }
];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 0,
			author: 0,
			selected: 0
		};
		this.getNewQuote = this.getNewQuote.bind(this);
		this.getNewQuoteIndex = this.getNewQuoteIndex.bind(this);
	}

	componentWillMount() {
		this.getNewQuote();
	}

	getNewQuote() {
		let newQuoteIndex = this.getNewQuoteIndex(this.state.selected),
			newQuote = quotes[newQuoteIndex];

		return this.setState({
			text: newQuote.text,
			author: newQuote.author,
			selected: newQuoteIndex
		});
	}

	getNewQuoteIndex(selected) {
		let index = Math.floor(Math.random() * Math.floor(quotes.length));
		return index !== selected ? index : this.getNewQuoteIndex(selected);
	}

	render() {
		return <QuoteBox data={this.state} handleChange={this.getNewQuote} />;
	}
}

export default App;
