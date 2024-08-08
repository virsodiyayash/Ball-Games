function Circle(position , radius , color , velocity){
    this.position = position;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;

    this.moveBall = () => {
      
        if(this.position.x + radius >= width || this.position.x - radius <= 0){
            this.velocity.x *= -1;
        }

        if(this.position.y + radius >= height || this.position.y - radius <= 0){
            this.velocity.y *= -1;
        }
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // if(this.position.x + radius == this.position.y + radius){
        //     this.velocity.x *= -1;
        //     this.velocity.y *= -1;
        // }

        // this.velocity.x *= 0.99;
        // this.velocity.y *= 0.99;

    }

    this.draw = () => {
        screen.fillStyle = "black";
        screen.beginPath();
        screen.arc(this.position.x , this.position.y , this.radius , 0 , 2 * Math.PI);
        screen.stroke();
        screen.fill();

        this.moveBall();

        screen.fillStyle = this.color;
        screen.beginPath();
        screen.arc(this.position.x , this.position.y , this.radius , 0 , 2 * Math.PI);
        screen.stroke();
        screen.fill();

    }
}

function Vector(x , y){
    this.x = x;
    this.y = y;
}

