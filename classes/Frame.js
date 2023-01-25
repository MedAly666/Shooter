'use strict'

class Frame {
    constructor(x,y,w,h){
        this.x = x - WIDTH/2;
        this.y = y - HEIGHT/2;
        this.width = w
        this.height = h
    }

    setPosition(x,y){
        this.x = x - WIDTH/2;
        this.y = y - HEIGHT/2;
    }

    setSize(w,h){
        this.width = w
        this.height = h
    }

    draw(grid){
        let start_cell = [Math.floor(this.x/16),Math.floor(this.y/16)];
        let coord_start_cell = [start_cell[0]*16,start_cell[1]*16];
        let start_draw = [coord_start_cell[0] - this.x , coord_start_cell[1] - this.y ]

        for(let j = start_cell[1]; j < grid.length; j++){
            for(let i = start_cell[0]; i < grid[j].length; i++){
                switch(grid[j][i]){
                    case 0 :
                        ctx.fillStyle = '#0000ff'
                        ctx.fillRect( (i - start_cell[0])*STEP, (j - start_cell[1])*STEP, STEP, STEP)
                    break;
                    case 1 :
                        ctx.fillStyle = '#005000'
                        ctx.fillRect( (i - start_cell[0])*STEP, (j - start_cell[1])*STEP, STEP, STEP)
                    break;
                    case 2 :
                        ctx.fillStyle = '#bbbbbb'
                        ctx.fillRect( (i - start_cell[0])*STEP, (j - start_cell[1])*STEP, STEP, STEP)
                    break;
                    default :

                    break;
                }
            }
        }
    }
}