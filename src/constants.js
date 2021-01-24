export const year = new Date().getFullYear()

export const url = 'knowyourkisaan.com'
const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${url}`
const twitterShareURL = `http://www.twitter.com/share?url=${url}`
const githubURL = 'http://www.github.com/tarunbatra/know-your-kisaan'

export const currency = '₹'

export const seasons = ['Kharif', 'Rabi']

export const welcomeMsg = `
<br />
You are a farmer. You have to sell your crop to maximise your profit. When you sell your crop you get cash which you can use to produce more crop. You lose the game when you run out of cash so keep an eye on it!
<br /> <br />
Due to the new farm bills private players have entered the market and are competing with the public APMC mandis. Let's see if you can survive.
<br /><br />
Close this and click <kbd>Harvest</kbd> to start farming. Good luck!`

export const gameOverMsg = `
<br />
You as a farmer lost to the predatory pricing strategy of the corporate. This strategy is typical in markets where private companies for monopolies. Read more about it <a href="https://en.wikipedia.org/wiki/Predatory_pricing">here on Wikipedia</>.
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
© Tarun Batra, ${year}
`

export const STATE = {
	'GAME_NOT_STARTED': 0,
	'GAME_STARTED': 1,
	'GAME_OVER': 2,
}

export const mainBtnText = {
	0: 'Start',
	1: 'Harvest',
	2: 'Game Over',
}

export const infoboxHeaderList = {
	0: 'Instructions',
	1: null,
	2: 'Game Over',
}

export const parameters = {
	farmer: {
		cash: 150,
		expenses: 100
	},
	apmc: {
		cash: 300,
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
