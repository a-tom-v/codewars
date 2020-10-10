function mygcd(x,y){
    x = Math.abs(x);
    y = Math.abs(y);
    if (y > x) {let temp = x; x = y; y = temp;}
    while (true) {
    if (y === 0) return x;
    x %= y;
    if (x === 0) return y;
    y %= x;
    }
  }