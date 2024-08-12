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

    this.add = function(vector){
        this.x += vector.x;
        this.y += vector.y;
    };

    this.subtract = function(vector){
        this.x -= vector.x;
        this.y -= vector.y;
    };

    this.multiply = function(scalar){
        this.x *= vector.x;
        this.y *= vector.y;
    };

    this.magnitude = function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };

    this.normalize = function() {
        let mag = this.magnitude();

        if(mag > 0){
            this.x /= mag;
            this.y /= mag;
        }
    };

    this.dot = function(vector){
        return this.x * vector.x + this.y * vector.y;
    };
}

