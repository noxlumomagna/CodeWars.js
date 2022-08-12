Write function potatoes with

int parameter p0 - initial percent of water-
int parameter w0 - initial weight -
int parameter p1 - final percent of water -
potatoesshould return the final weight coming out of the oven w1 truncated as an int.

function potatoes(p0,w0,p1){
  return Math.floor(w0*(100-p0)/(100-p1))
}
