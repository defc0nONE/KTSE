function Game(cycle) {
  this.collisions = []

  this.cycle = cycle
  this.actionPoints = new ActionPoints(this.game);
  this.energyLevel = new EnergyLevel(this.game);
  this.projectScore = new ProjectScore(this.game);


  Game.prototype.draw = function(objArray) {
    objArray.forEach(function(e) {
      e.reposition(e);
    });
  };

  Game.prototype.consumeAP = function() {
    this.actionPoints.consumeAP();
  }

  Game.prototype.meditate = function() {
    this.actionPoints.meditate();
  }

  Game.prototype.turnOver = function() {
    this.projectScore.scoreMultiplier(1);
    this.cycle.turnOver();
  }

  Game.prototype.gameOver = function() {
    this.cycle.gameOver();
  }

  Game.prototype.decreaseEnergy = function() {
    this.energyLevel.decreaseEnergy();
  }

  Game.prototype.increaseEnergy = function() {
    this.energyLevel.increaseEnergy();
  }

};
