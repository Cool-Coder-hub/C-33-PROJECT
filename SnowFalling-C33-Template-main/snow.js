class Snow{
    constructor (x,y,width,height){
        var options = {
        friction = 1,
        density = 1,
        isStatic = false,
        }
        this.snow = Bodies.circle(x,y,5,options);
        this.width = 50;
        this.height = 50;

        this.img = loadImg("snow4.webp");
        World.add(world, this.snow);
         
    }

    display(){
        image(this.img,this.snow.position.x,this.snow.position.y,50,50);

    }
    
}