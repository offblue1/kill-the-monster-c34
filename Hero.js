class Hero {
    constructor(x, y,r) {
        var options = {
            // 'isStatic':true,
            'frictionAir':1.00,
            'density':1.0
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
        this.image = loadImage("Superhero1.png")
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r+150,this.r);
        pop();
      }
}