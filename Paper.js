class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
      this.image=loadImage("images/paper.png"); 
      World.add(world, this.body);
      }
    display(){
      var pos2=this.body.position;
      push();
      fill("yellow");
      translate(pos2.x,pos2.y-10);
      ellipseMode(RADIUS);
      ellipse(0,0,20,20);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
      }
    }