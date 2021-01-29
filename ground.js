class Ground {
    constructor(x,y,width,height){
   var  option={
            isStatic:true,
        }
        this.body=Bodies.rectangle(x,y,width,height,option)
        this.width=width
        this.width=width
        World.add(world,this.body)
    }
    display(){
        push()
        fill("yellow")
        rect(this.body.position.x,this.body.position.y,12000,20)
        pop()
    }
}