class food{
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.grid = 20;
        this.update();
        this.draw()
    }

    update(){
        this.x = (Math.floor(Math.random() * (19 - 0)))*this.grid;
        this.y = (Math.floor(Math.random() * (19 - 0)))*this.grid;
    }

    draw(){
        this.game.context.fillStyle = 'yellow';
        this.game.context.fillRect(this.x, this.y, this.grid, this.grid);
    }
}