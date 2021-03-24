class Block{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;

        World.add(world,this.body);

    }
    display(){
         var pos=this.body.position;
         var angle=this.body.setAngle;
         push();
         translate(pos.x,pos.y);
         rotate(angle);
         rectMode(CENTER);
         fill("red");
         stroke("orange");
         strokeWeight(5);
         rect(0,0,this.width,this.height);
         pop ();
    }
}