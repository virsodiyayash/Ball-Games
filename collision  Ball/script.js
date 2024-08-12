let object1 = new Circle(new Vector(width / 2 , height / 2 ), 10 , 'red' , new Vector(10 , 10));
let object2 = new Circle(new Vector(width / 4 , height / 5 ), 15 , 'blue' , new Vector(10 , 4));

// setInterval(object1.draw , 10);
// setInterval(object2.draw , 10);

function detectCollision(circle1 , circle2){
    let dx = circle2.position.x - circle1.position.x;
    let dy = circle2.position.y - circle1.position.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    return distance < circle1.radius + circle2.radius;
}

function resolveColllision(circle1 , circle2){
    let normal = new Vector(circle2.position.x - circle1.position.x , circle2.position.y - circle1.position.y);
    normal.normalize();

    let relativeVelocity = new Vector(circle2.velocity.x - circle1.velocity.x , circle2.velocity.y - circle1.velocity.y);
    let speed = relativeVelocity.dot(normal);

    if(speed > 0){
        return;
    }

    let impulse = (2 * speed) / (circle1.radius + circle2.radius);

    circle1.velocity.x -= impulse * circle2.radius * normal.x;
    circle1.velocity.y -= impulse * circle2.radius * normal.y;
    circle2.velocity.x += impulse * circle1.radius * normal.x;
    circle2.velocity.y += impulse * circle1.radius * normal.y;
}

function animate() {
    screen.clearRect(0, 0, width, height);

    object1.draw();
    object2.draw();

    if (detectCollision(object1, object2)) {
        resolveCollision(object1, object2);
    }

    requestAnimationFrame(animate);
}

animate();

