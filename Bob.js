class Bob{
    constructor(x, y){
    var options={
        isStatic:false,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2
    }
    this.body = Bodies.circle(x, y,35, options);
     this.radius = 35;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(this.radius);
      fill("pink");
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
}
