class paper{
constructor(x,y){
    
      
      this.image=loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
    
    
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop();
      };
    
}