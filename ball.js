class Paperball {
    constructor(){
        var option={
            restitution:0.5
        }
        this.body=Bodies.circle(50,300,10,option);
        World.add(world,this.body)
    

    }
    display(){
        var pos=this.body.position
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,10,10);
    }
}