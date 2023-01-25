'use strict'
//canvas setup
var canvas = document.querySelector('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
var ctx = canvas.getContext('2d');
//objects setup
var me = new Player(WIDTH/2,HEIGHT/2);
var frame = new Frame(me.x,me.y,WIDTH,HEIGHT)
var projectiles = [];
var enemies = [];
var keys = [];

const STEP = 64 ;

setup()

function setup(){
    ctx.beginPath()
    ctx.fillStyle = '#00ff00'
    ctx.fillRect(100,200,WIDTH/6,HEIGHT/6);


    me.draw()

    enemies.push(new Zombie(100,100))
    enemies.push(new Zombie(200,100))

    window.onkeydown = (e)=>{
        keys.push(e.code)
        activateKeys();
    }

    
    animate()
}

function animate(){
    requestAnimationFrame(animate)
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    frame.setPosition(me.x, me.y);
    frame.draw(maps.main)

    for(let enemy of enemies){
        //enemy.move()
        enemy.draw()
    }

    for(let projectile of projectiles){
        //enemy.move()
        projectile.draw()
    }

    me.draw()
}



function activateKeys(){
    while(keys.length>0){
        let code = keys.shift()
        //console.log(code)
        switch(code){
            case 'KeyA' :
                me.goLeft()
            break;
            case 'KeyW' :
                me.goUp()
            break;
            case 'KeyD' :
                me.goRight()
            break;
            case 'KeyS' :
                me.goDown()
            break;
            case 'KeyQ' :
                me.viewLeft();
            break;
            case 'KeyE' :
                me.viewRight();
            break;
            case 'ArrowRight' :
                me.viewRight();
            break;
            case 'ArrowLeft' :
                me.viewLeft();
            break;
            case 'Space' :
                me.shoot();
            break;
            default:

            break;
        }
    }
}

function calculDist(a,b){
    return Math.sqrt((a.x - b.x)**2+(a.y - b.y)**2 );
}