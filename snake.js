class snake {
    constructor(game) {
        this.game = game;
        this.x = 0;  //toa do x cua ran
        this.y = 0;  //toa do y cua ran
        this.grid = 20;
        this.dx = this.grid;
        this.dy = 0;
        this.cell = []; //tao 1 mang de luu chieu dai cua ran;
        this.maxCell = 2;
        this.diem =  0;
    }
    //thay doi vi tri con ran
    update(){

        if(this.endGame()) {
                this.x += this.dx;
                this.y += this.dy;
        }
        this.cell.unshift({x: this.x, y: this.y})
        if(this.cell.length > this.maxCell){
            this.cell.pop();
        }
        this.catchHandle();

        if(this.x >= this.game.canvas.width){
            this.x = 0;
        }
        else if(this.x < 0){
            this.x = this.game.canvas.width
        }
        else if(this.y >= this.game.canvas.height){
            this.y = 0;
        }
        else if(this.y < 0){
            this.y = this.game.canvas.height
        }
        this.diem = this.maxCell - 2;
       document.getElementById("diem").innerHTML = this.diem;
    }

    draw(){
        for (let i = 0; i < this.cell.length; i++) {

            this.game.context.fillStyle = 'red';
            this.game.context.fillRect(this.cell[i].x, this.cell[i].y, this.grid, this.grid);
        }
        if(this.endGame() === false){
            this.game.context.font = "15px arial";
            this.game.context.fillText("Thua rồi ^^. Điểm của bạn là: " + this.diem,100, 200);
        }


    }
    catchHandle(){
        document.addEventListener('keydown', (e) =>{
            if(e.which === 37 && this.dx === 0){
                this.dx = -this.grid;
                this.dy = 0;
            }
            else if(e.which === 38 && this.dy === 0){
                    this.dx = 0;
                    this.dy = -this.grid;
            }
                 else if(e.which === 39 && this.dx === 0){
                         this.dx = this.grid;
                         this.dy = 0 ;
            }
                      else if(e.which === 40 && this.dy === 0){
                              this.dx = 0;
                              this.dy = this.grid;
            }
        })
    }

    eat(x, y){
        if(this.x === x && this.y === y){
            this.maxCell++;
            return true;

        }
            return false;
    }
    endGame(){
        for (let i = 1; i < this.cell.length; i++) {
            if(this.x === this.cell[i].x && this.y === this.cell[i].y){
                return false;
            }
        }
        return true;
    }

}