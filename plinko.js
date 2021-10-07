class Plinko{
    constructor(x,y){
    var options={isStatic:true}
    this.r=10
    this.body=Bodies.circle(x,y,this.r,options)
    World.add(world,this.body)
    
    
    
    
    }
    display(){
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    ellipseMode(RADIUS)
        
    fill("white")
    ellipse(0,0,this.r,this.r)
    pop()
    }
    }
    
    