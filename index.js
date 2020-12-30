const Leadder = function (maxStep) {
  this.value = 0;
  this.maxStep = maxStep;
}

const LeadderPrototype = function () {
  this.up = function(){ 
   
      if (this.value >= this.maxStep) {
        return false;
      }
      ++this.value;
      return this;
     
    
  }
this.down = function down() {
  if (this.value <= 0) {
    return false;
  }
  --this.value;
  return this;
}
this.showStep = function showStep() {
  return this.value;
}
}

Leadder.prototype = new LeadderPrototype();

const leadder1 = new Leadder(10);