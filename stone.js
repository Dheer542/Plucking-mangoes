class stone{
constructor(x,y,width,height){
var options={
isStatic:false,
 friction:1,
density:1.2
}

this.body = Bodies.rectangle(x, y, width, height,options);
this.width = width;
this.height = height;
this.image = loadImage("Plucking mangoes/stone.png");
World.add(world, this.body);


}
display(){
var pos=this.body.position;
push();
translate(pos.x,pos.y);
pos.x= mouseX;
pos.y = mouseY;
rectMode(CENTER);
rect(0, 0, this.width, this.height);

}




}