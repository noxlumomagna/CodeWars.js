Write a class Block that creates a block (Duh..)

##Requirements

The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

class Block{
  constructor(data){
    [this.w, this.l, this.h] = data;
  }
  getWidth(){ 
    return this.w
  }
  getLength(){ 
    return this.l 
  }
  getHeight(){ 
    return this.h 
  }
  getVolume(){
    let {l, w, h} = this;
    return w*l*h;
  }
  getSurfaceArea(){
    let {l, w, h} = this;
    return 2 * (l*w + l*h + w*h);
  }
