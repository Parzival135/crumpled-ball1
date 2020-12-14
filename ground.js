class Ground {
    constructor(){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(300,590,600,10,option);
        World.add(world,this.body)
    

    }
    display(){
        var pos=this.body.position
        rectMode(CENTER);
        rect(pos.x,pos.y,600,10);
    }
}