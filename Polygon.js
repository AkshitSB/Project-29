class Polygon{
    constructor(x, y, radius) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1
        }
        this.image = loadImage("polygon.png");
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
       imageMode(CENTER);
       image(this.image, pos.x, pos.y, 40,40);
      }
}