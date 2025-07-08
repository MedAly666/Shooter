class Projectile{
    constructor(x,y,a){
        this.start = [x,y]
        this.x = x 
        this.y = y
        this.a = a
        this.damage = 50 ;
        this.maxDist = 500 ;  
    }

    shoot(){
        this.x += -Math.sin(this.a)*STEP*2/3
        this.y += -Math.cos(this.a)*STEP*2/3
    }

    lost(){
        let [x,y] = this.start ;
        if(Math.sqrt((this.x-x)**2+(this.y - y)**2)>this.maxDist){
            return true ;
        }
        return false ;
    }

    draw(){
        ctx.beginPath();
        ctx.fillStyle = 'yellow'
        ctx.arc(this.x, this.y, 5,0, 2*Math.PI, false);
        ctx.fill(); 
        
    }
}
