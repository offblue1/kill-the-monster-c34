class Monster {
    constructor(x, y,r) {
        var options = {
            'isStatic':true,
            'frictionAir':0.005,
            'density':1.0
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, (this.r), options);
        this.image = loadImage("Monster1.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r+130,this.r+155);
        pop();
      
}
}