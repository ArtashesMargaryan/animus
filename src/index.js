// Import Application class that is the main part of our PIXI project
import * as PIXI from 'pixi.js'
//import { createElement } from '../src/utils.js'

export class Game extends PIXI.Application {
	constructor() {

		super({
			backgroundColor: 'antiquewhite',
			width: 800,
			height: 800,

		})
		this.width = 800;
		this.height = 800;
		document.body.appendChild(this.view)
		this.ticker = PIXI.Ticker.shared;
		this.angl = Math.PI / 3
		this.loadAssets()
	}

	loadAssets() {
		// console.warn('hasar');
		this.loader.add('ball', './assets/basketball.png')
		this.loader.add('btn1', './assets/btn1.png')
		this.loader.add('btn2', './assets/btn2.png')
		this.loader.load(() => {
			this.createBall()
			this.createPlatforns()
			this.btnFolouwMous()
			this.ballMoveAnim()
		})
	}

	createPlatforns() {
		const btn1 = PIXI.Sprite.from('btn1')
		const btn2 = PIXI.Sprite.from('btn2')
		btn1.position.x = (this.width - btn1.width) / 2
		btn2.position.x = (this.width - btn1.width) / 2
		btn2.y = this.height - btn2.height
		//btn1.y = btn1.style.height
		this.stage.addChild((this.btn1 = btn1))
		this.stage.addChild((this.btn2 = btn2))
	}

	createBall() {
		const ball = PIXI.Sprite.from('ball')
		ball.x = this.width / 2 - ball.width
		ball.y = this.height / 2
		this.stage.addChild((this.ball = ball))
		// 	console.warn(this.ball.getBounds());
	}

	btnFolouwMous() {
		this.view.addEventListener('mousemove', e => {
			this.btn1.x = e.clientX  //up
			this.btn2.x = e.clientX  //down
		})
	}

	ballMoveAnim() {
		this.ticker.add((time) => {
			this.ballMove()
		});
	}

	ballMove() {
		this.ball.x += 5 * Math.cos(this.angl)
		this.ball.y += 5 * Math.sin(this.angl)
		this.testPosition(this.ball.x, this.ball.y, this.angl)
	}

	testPosition(ballX, ballY, ballMoveAngl) {
		let ball = this.ball;
		let btn2 = this.btn2
		let maxHeight = this.height
		let maxWidth = this.width
		if ((ballY <= this.btn1.height + this.btn1.y) &&
			(this.btn1.x < ball.x) &&
			(ball.x < this.btn1.x + this.btn1.width)) {
			this.angl = - ballMoveAngl;
		}
		if ((ballY >= btn2.y - ball.width / 2 - 5) &&
			(btn2.x < ball.x < btn2.x + btn2.width)) {
			this.angl = - ballMoveAngl;
		}
		if (ballX > maxWidth - ball.width / 2 - 10) {
			this.angl = Math.PI - ballMoveAngl;
		}
		if (ballX < ball.width / 2 - 10) {
			this.angl = Math.PI - ballMoveAngl;
		}
		if ((ballY >= btn2.y - ball.width / 2 - 5) &&
			((btn2.x > ball.x) ||
				(ball.x > btn2.x + btn2.width))) {
			//console.log("ekav 1" + ballY + "btn2" + btn2.x);
			this.ticker.stop()
		}
		if ((ballY < this.btn1.y - this.ball.height) &&
			((this.btn1.x > ballX + this.ball.width) ||
				(ball.x > btn2.x + btn2.width))) {
			console.warn("ekav 1");
			this.ticker.stop()
		}
		ball = null;
		btn2 = null;
		maxHeight = null;
		maxWidth = null;
	}
}



new Game();























































































// // Load the logo
// app.loader.add('Basketball', './assets/basketball.png')
// app.loader.add('logo', './assets/logo.png')
// app.loader.load(() => {
// 	const spriteLogo = PIXI.Sprite.from('logo');
// 	const spriteBasketball = PIXI.Sprite.from('Basketball');


// 	spriteLogo.anchor.set(0.5) // We want to rotate our spriteLogo relative to the center, so 0.5
// 	//app.stage.addChild(spriteLogo)
// 	app.stage.addChild(spriteBasketball)


// 	// Position the spriteLogo at the center of the stage
// 	spriteLogo.x = app.screen.width * 0.5
// 	spriteLogo.y = app.screen.height * 0.5

// 	// Put the rotating function into the update loop
// 	app.ticker.add(delta => {
// 		spriteLogo.rotation += 0.005 * delta
// 	})
// })