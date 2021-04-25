class Paper {
    constructor(x, y, width, height) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("paper.png");
      this.image.scale = 3;
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
      fill("red");
      stroke("orange");
      strokeWeight(3);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }