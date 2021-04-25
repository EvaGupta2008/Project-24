class Dustbin {
    constructor(x, y) {
      var options = {
          isStatic: true,
          restitution:0.3,
          friction:1,
          density:1.2
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 100;
      this.height = 100;
      this.image = loadImage("box.png");
      this.image.scale=9;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("red");
      stroke("orange");
      strokeWeight(3);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }