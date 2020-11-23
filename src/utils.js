export function createElement(this) {

    this.spriteBasketball = PIXI.Sprite.from('basketball')
    this.btn1 = PIXI.Sprite.from('btn1')
    this.btn2 = PIXI.Sprite.from('btn2')
    this.spriteBasketball.x = this.width / 2
    this.btn1.position.x = this.width / 2
    this.btn2.position.x = this.width / 2
    this.btn2.y = this.height - this.btn2.height
    //this.btn1.y = this.btn1.style.height
    this.spriteBasketball.y = this.height / 2
    this.stage.addChild(this.spriteBasketball)
    this.stage.addChild(this.btn1)
    this.stage.addChild(this.btn2)


}