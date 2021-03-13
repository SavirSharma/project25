class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
          'restitution':0,
          'friction':1,
          'density':0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
	  this.height = height;
	  this.image=loadImage("images/dustbingreen.png"); 
      World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y-80);
    fill(255);
	  rectMode(CENTER);
	  rect(this.body.position.x, this.body.position.y, this.width, this. height);
	  imageMode(CENTER);
    image(this.image,0,0,200,190);
    pop();
    }
  }