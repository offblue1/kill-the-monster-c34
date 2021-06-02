class Rope {
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.1,
          length: 350
      }
      this.pointB = pointB
      this.rope= Constraint.create(options);
      World.add(world, this.rope);
  }
  /*attach(body){
      this.sling.bodyA = body;
  }
  
  fly(){
      this.sling.bodyA = null;
  }*/

  display(){
  if(this.rope.bodyA){
      var pointA = this.rope.bodyA.position;
      var pointB = this.pointB;
      push();
      stroke(0);
      strokeWeight(0);
      line( pointB.x, pointB.y,pointA.x, pointA.y);
      pop();

  }

  }

  
}
