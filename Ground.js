class Ground{

    constructor(x, y, w, h){

        var options = {

            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
            isStatic: true
            

        }

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.body.width = w;
    this.body.height = h;
    World.add(world, this.body)

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(170, 169, 173)
        rect(0, 0, this.body.width, this.body.height);
        pop();

    }

}