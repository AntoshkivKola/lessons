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
    return this._to = newTo;
  }
  
  set from(newFrom){
    if( typeof(newFrom) !== 'number'){
      throw new TypeError('this value must be of type number!');
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
   * @returns {boolean}
   */
  validate(num){
    return (num >= this.from) && (num <= this.to);
  }
}

const rv = new RangeValidator(5,8);