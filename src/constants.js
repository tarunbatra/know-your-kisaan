export const url = 'knowyourkisaan.com'
const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${url}`
const twitterShareURL = `http://www.twitter.com/share?url=${url}`
const githubURL = 'http://www.github.com/tarunbatra/know-your-kisaan'
const thisYear = new Date().getFullYear()

export const welcomeMsg = `
<br />
You are a farmer. Private players have entered the market and are competing with the public APMC mandis. Let's see if you can survive.
<br /><br />
Close this and click <kbd>Produce</kbd> to start farming. Good luck!`

export const gameOverMsg = `
<br />
You as a farmer lost to the predatory pricing strategy of the corporate. Read more about it <a href="https://en.wikipedia.org/wiki/Predatory_pricing">here on Wikipedia</>.
<br /><br />
<a href="${facebookShareURL}" target="_blank">Share on Facebook</a> and <a href="${twitterShareURL}"/>Tweet</a>.
`

export const aboutUsMsg = `
This game simulates predatory pricing modal to demonstrate how the entry of private players in Indian agriculture without safeguards like MSP caan leave the farmers in a worse state in the long run.
<br /><br />
The code is <a href=${githubURL}>open sourced on Github</a> and contributions are welcome!
<br /><br />
<a href="${facebookShareURL}" target="_blank">Share on Facebook</a> and <a href="${twitterShareURL}"/>Tweet</a>.
<br /><br />
© Tarun Batra, ${thisYear}
`

export const STATE = {
	'GAME_NOT_STARTED': 0,
	'GAME_STARTED': 1,
	'GAME_OVER': 2,
}

export const BTN_TEXT = {
	0: 'Start',
	1: 'Produce',
	2: 'Game Over',
}

export const parameters = {
	farmer: {
		cash: 200,
		expenses: 100
	},
	apmc: {
		cash: 500,
		expenses: 100,
		minimumPrice: 100,
		margin: 200,
	},
	corporate: {
		cash: 1000,
		expenses: 50,
		minimumPrice: 10,
		margin: 300,
	}
}