class Ground{
    constructor(x,y,width,height){
        var op={
            isStatic:true,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,width,height,op);
        this.spritebody = createSprite(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        push();
        rectMode(CENTER);
        fill(rgb(63,45,29));
        this.spritebody.shapeColor = rgb(63,45,29);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        this.spritebody.x = this.body.position.x;
        this.spritebody.y = this.body.position.y;
        pop();
    }
}