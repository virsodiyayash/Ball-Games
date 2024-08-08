let object1 = new Circle(new Vector(width / 2 , height / 2 ), 10 , 'red' , new Vector(10 , 10));
let object2 = new Circle(new Vector(width / 4 , height / 5 ), 15 , 'blue' , new Vector(10 , 4));

setInterval(object1.draw , 10);
setInterval(object2.draw , 10);


