class PipePair{
    static WIDTH = 20;
    static SPEED = 2;
    static x = 2;
    static top = 5;
    static bottom = 5;
    static highlight = false;

    /*
    Must set:
    - x (x-position of the PipePair)
    - top
    flappy bird 4
    - bottom
    - width
    - speed
    - highlight (boolean representing if this PipePair must be highlighted)
    */
    constructor(){
        this.WIDTH = WIDTH;
        this.SPEED = SPEED;
        this.x = x;
        this.top = top;
        this.bottom = bottom;
        this.highlight = highlight;
    }
    /*
    Draws out the PipePair. Will need to fill with initial color, and will
    eventually check to see if the PipePair needs to be highlighted.
    */
    draw() {
    //will need to call rect() twice - once for the top pipe, and once
    //for the bottom pipe
      this.x = 600;
      rect(x, 1, 25, 100);
      rect(x, 450, 25, 150);
        
    }
    /*
    Will be used to update the x-position of the PipePair.
    */
    update(){
        x = x - 2;
    }
    /*
    Determines whether or not the PipePair is off screen.
    @return boolean Whether the PipePair is off screen
    */
    isOffScreen(){
        for (let i = pipe.length - 1; i >= 0; i--) {
            pipe[i].draw();
            pipe[i].update();
            
            // If a pipe is off screen, remove it from the array
            if (pipe[i].isOffScreen()) {
              pipe.splice(i, 1);
            }
          }
    
    }
}
    