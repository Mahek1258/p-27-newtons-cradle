class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options ={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness: 0.004
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;

        strokeWeight(2);

        var A1X=pointA.x;
        var A1Y=pointA.y;
        var A2X=this.offsetX;
        var A2Y=this.offsetY;
        line(A1X,A1Y,A2X,A2Y);
    }
}