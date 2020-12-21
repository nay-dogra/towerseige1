var box, slingshot, ground;

function setup(){
    var canvas = createCanvas(800,400);
    box1 = new box(330,235,30,40);
    box2 = new box(360,235,30,40);
    box3 = new box(390,235,30,40);
    box4 = new box(420,235,30,40);
    box5 = new box(450,235,30,40);
    
    box6 = new box(360,195,30,40);
    box7 = new box(390,195,30,40);
    box8 = new box(420,195,30,40);

    box9 = new box(390,155,30,40);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);

    slingshot = new slingshot(this.polygon,{x:100, y:200});

    object1 = new ground(700, 300, 50, 50);
    object2 = new ground(300, 200, 150, 50);

}

function draw(){
   
    

    image(CENTER);
    image(polygen_img, polygon.position.x, polygon.position.y, 40, 40);

    slingshot.display();
    drawSprites();
}