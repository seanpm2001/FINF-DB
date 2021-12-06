function Ball(r) {
    this.radius = r; // the "r" argument is local to the ball object
    this.area = Math.PI * (r ** 2); // parentheses don't do anything but clarify
    
    // objects can contain functions ("method")
    this.show = function() {
        drawCircle(this.radius); // references another function (that draws a circle)
    };
}

let myBall = new Ball(5); // creates a new instance of the ball object with radius 5
myBall.radius++; // object properties can usually be modified from the outside
myBall.show(); // using the inherited "show" function
