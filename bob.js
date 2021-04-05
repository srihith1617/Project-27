class bob  {
    constructor (x,y) {
        this.body=Bodies.circle(x,y,50,{isStatic:false,restitution: 0,friction:0, density:0.1});
        World.add(world,this.body);
    }
    display() {
        var pos=this.body.position;
        fill("blue");
        ellipse(pos.x, pos.y, 100,100);
    }
}