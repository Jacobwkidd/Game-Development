class Bird {
    static WIDTH = 32;
    static X_POSITION = 64;
    static y = height / 2;
    static GRAVITY = 0.4;
    static LIFT = -12;
    static velocity = 0;
    

    constructor(WIDTH, X_POSITION, y, gravity, LIFT, velocity){
        this.WIDTH = WIDTH;
        this.X_POSITION = X_POSITION;
        this.y = y;
        this.gravity = gravity;
        this.LIFT = LIFT;
        this.velocity = velocity;
    }
    draw(){
        fill(255);
        ellipse(this.X_POSITION, this.y, 32); // making a circle
    }
    update(){
      this.velocity += this.gravity;
      this.y += this.velocity;
      
      if (this.y > height) {
        this.y = height;
        this.velocity = 0;
      }
      if (this.y < 0) {
        this.y = 0;
        this.velocity = 0;
      }
    } 
    up(){
        this.velocity += this.LIFT;
    }
}
