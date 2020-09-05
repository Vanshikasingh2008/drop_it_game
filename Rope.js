class Rope{
    constructor(point,body2){
     var op = {
         pointA: point,
         bodyB: body2,
         length:200,
         stiffness: 0.5,
         frictionAir : 0
     }

     this.band = Matter.Constraint.create(op);
     //this.body.inertia = 0;
     World.add(world,this.band);
    }
    attach(body){
     this.band.bodyB = body
    }
    display(){
        if(this.band.bodyB){
        var point1 = this.band.pointA;
        var point2 = this.band.bodyB.position;
        push();
        strokeWeight(4);
        stroke("brown");
        line(point1.x,point1.y,point2.x,point2.y);
        pop();
    }
    }
}