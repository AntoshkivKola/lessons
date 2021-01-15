'use strict';

class RangeValidator {
  /**
   * 
   * @param {number} from 
   * @param {number} to 
   */
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  
  set to(newTo){
    if( typeof(newTo) !== 'number'){
      throw new TypeError('this value must be of type number!');
    }
    if(newTo < this.from ){
      throw new RangeError('value to must be greater than value from');
    }
    return this._to = newTo;
  }

  set from(newFrom){
    if( typeof(newFrom) !== 'number'){
      throw new TypeError('this value must be of type number!');
    }
    if(newFrom > this.to ){
      throw new RangeError('value from must be less than value to');
    }
    return this._from = newFrom;
  }

  get to(){
    return this._to;
  }

  get from(){
    return this._from;
  }

  get range(){
    return [this.from, this.to];
  }

  /**
   * check if a number is in the specified range
   * @param {number} num 
   * @returns {number}
   */
  validate(num){
    if((num >= this.from) && (num <= this.to)){
      return num;
    }
    throw new RangeError('the number must be in the range');
  }
}

const rv = new RangeValidator(5,8);