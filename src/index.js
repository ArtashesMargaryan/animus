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
		this.angl = Math.PI
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
		const ball = this.ball;
		const maxWidth = this.width
		const btn1 = this.btn1
		const btn2 = this.btn2
		const maxHeight = this.height

		if ((ballY <= btn1.height) && (btn1.x > ball.x > btn1.x + btn1.width)) {
			this.angl = Math.PI / 2 - ballMoveAngl;
			this.ballMoveAnim()
			console.warn('1');
		}
		if ((ballY >= btn2.y) && (btn2.x > ball.x > btn2.x + btn2.width)) {
			this.angl = Math.PI / 2 - ballMoveAngl;
			this.ballMoveAnim()
			console.warn('2');
		}
		if (ballX > maxWidth) {
			this.angl = -ballMoveAngl;
			this.ballMoveAnim()
			console.warn('3');
		}
		if (ballX < ball.width / 2 - 10) {
			this.angl = -ballMoveAngl;
			this.ballMoveAnim()
			console.warn('4');
		}
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