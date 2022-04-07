class Target {
    constructor(x,y,r, color) {
        const options = {
            isStatic: true
          };
        this.color = color
        this.x = x
        this.y = y
        this.r = r
        if (this.color == "grey") {
            this.image = loadImage("image-removebg-preview.PNG")
        }
        else if (this.color == "red") {
            this.image = loadImage("image-removebg-preview (2).PNG")
        }

    }
    display() {
        push()
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.r, this.r);
        pop()
    }
}