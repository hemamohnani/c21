class Ground {

    constructor(x,y,width,height) //setup
    {
        var options = {
            isStatic: true
        }
        this.ground = Bodies.rectangle(x,y,width,height, options)
        this.w = width;
        this.h = height
        World.add(world, this.ground)
    }

    show() //draw
    {
        push()

        rectMode(CENTER)
        fill("yellow")
        var pos = this.ground.position
        rect(pos.x,pos.y,this.w,this.h)
        
        pop()
    }


}