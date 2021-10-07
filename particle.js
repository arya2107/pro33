class Particle{
    constructor(x,y){
    var options={restitution:0.4}
    this.r=10
    this.body=Bodies.circle(x,y,this.r,options)
    World.add(world,this.body)
    this.color=color(random(0,255),random(0,255),random(0,255))
    
    
    
    }
    display(){
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    ellipseMode(RADIUS)
        
    fill(this.color)
    ellipse(0,0,this.r,this.r)
    pop()
    }
    }
    
    