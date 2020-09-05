class Suitcases{
    constructor(x,y,width,height){
        var op={
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,width,height,op);
        this.spritebody = createSprite(x,y,width,height);
        this.width = width;
        this.height = height;
        var rand = Math.round(random(1,5));
        switch(rand){
            case 1 : this.image = loadImage("blueSuitcase.jpg");
            break;
            case 2 : this.image = loadImage("blackSuitcase.jpg");
            this.spritebody.scale = 0.5;
            break;
            case 3 : this.image = loadImage("brownSuitcase.jpg");
            this.spritebody.scale = 1.5;
            break;
            case 4 : this.image = loadImage("greenSuitcase.jpg");
            this.spritebody.scale = 0.5;
            break;
            case 5 : this.image = loadImage("orangeSuitcase.jpg");
            this.spritebody.scale = 1.5;
            break;
            default:break;
        }
        World.add(world,this.body);
        this.spritebody.addImage("s",this.image);
    }
    /*switchCase(){
    
    }*/

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        imageMode(CENTER);
        //image(this.image,0,0,this.width,this.height);
        this.spritebody.x = this.body.position.x;
        this.spritebody.y = this.body.position.y;
        pop();
        /*var rand = random(1,5);
        switch(rand){
            case 1 : image(this.image,0,0,this.width,this.height);
            break;
            case 2 : image(this.image2,0,0,this.width,this.height);
            break;
            case 3 : image(this.image3,0,0,this.width,this.height);
            break;
            case 4 : image(this.image4,0,0,this.width,this.height);
            break;
            case 5 : image(this.image5,0,0,this.width,this.height);
            break;
            default:break;
        }
        pop();*/
        //image(this.image,0,0,this.width,this.height)
        //rectMode(CENTER);
        }
        //fill("blue");
        //rect(0,0,this.width,this.height);
        
}