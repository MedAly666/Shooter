'use strict'

class Zombie{
    constructor(x,y){
        this.x = x ;
        this.y = y ;

        this.health = 500 ;
    }

    takeDamage(d){
        this.health -= d ;
    }

    spawn(){
        
    }

    move(){
        this.x += 1
        this.y += 0.1*(this.x/10)**2
    }

    draw(){
        /*let p = players[0]
        let pos_x = this.x-(p.x-canvas.width/2)
        let pos_y = this.y-(p.y-canvas.height/2)*/
        //draw the zombie
        ctx.beginPath();
        ctx.fillStyle = 'red'
        ctx.arc(this.x, this.y, 10,0, 2*Math.PI, false);
        ctx.fill();
        //draw health bar
        ctx.beginPath();
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(this.x-15,this.y+12,30,7);
        ctx.beginPath()
        ctx.fillStyle = '#ff0000'
        ctx.fillRect(this.x - 15,this.y + 12,this.health*30/500,7);
    }
}