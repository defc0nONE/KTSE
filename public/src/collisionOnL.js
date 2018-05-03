(function(exports) {
    collisionOnL = function(a, b, c) {
      var x
      var obj
      b.some(function(e) {
          if (
            ((a._y >= (e._y + e._spriteHeight)) ||
            ((a._y + a._spriteHeight) <= e._y) ||
            ((a._x + a._spriteWidth) <= e._x) ||
            (a._x - c >= (e._x + e._spriteWidth))) === false) {
              x = true
              obj = e
              return x, obj
        }
      })
    return { 'collide': x, 'object': obj }
  }
  exports.collisionOnL = collisionOnL;
})(this)
