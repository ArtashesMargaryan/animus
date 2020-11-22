// Import Application class that is the main part of our PIXI project
import * as PIXI from 'pixi.js'

export class Game extends PIXI.Application {
	constructor() {
		this.width = 800;
		this.height = 800;
		super({
			backgroundColor: antiquewhite,
			width: this.width,
			height: this.height,

		})

		console.warn(this.height);

		document.body.appendChild(this.view)
		this.loadAssets()
	}
	loadAssets() {
		// console.warn('hasar');
		this.loader.add('basketball', './assets/basketball.png')
		this.loader.add('btn1', './assets/btn1.png')
		this.loader.add('btn2', './assets/btn2.png')
		console.log(this.loader);
		this.loader.load(() => {
			this.createElement();
		})
	}
	createElement() {
		this.spriteBasketball = PIXI.Sprite.from('basketball')
		this.btn1 = PIXI.Sprite.from('bt1')
		this.btn2 = PIXI.Sprite.from('btn2')
		this.spriteBasketball.x = this.width / 2
		this.btn1.position.x = this.width / 2
		this.btn2.position.x = this.width / 2
		//this.btn2.y = this.height - this.btn2.style.height
		//this.btn1.y = this.btn1.style.height
		this.spriteBasketball.y = this.height / 2
		this.stage.addChild(this.spriteBasketball)
		this.stage.addChild(this.btn1)
		this.stage.addChild(this.btn2)


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