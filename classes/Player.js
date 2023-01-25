'use strict'

class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    //Change the position of the player
    setPosition(x,y){
        this.x = x;
        this.y = y;
    }
    //return the position of the player
    getPosition(){
        return [this.x,this.y];
    }
    //Movement
    goLeft(){
        this.x -= 5 ;
    }

    goRight(){
        this.x += 5 ;
    }

    goUp(){
        this.y -= 5 ;
    }

    goDown(){
        this.y += 5 ;
    }

    viewLeft(){
        this.a += 0.1;
        
    }

    viewRight(){
        this.a -= 0.1;
        
    }

    shoot(){
        projectiles.push(new Projectile(WIDTH/2, HEIGHT/2, 10))
    }
    //draw the player
    draw(){
        ctx.beginPath();
        ctx.fillStyle = '#000000'
        ctx.arc(WIDTH/2,HEIGHT/2,10,0,2*Math.PI,false)
        ctx.fill()
    }
}