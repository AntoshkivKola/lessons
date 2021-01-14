'use strict';

class Squirrel{
  constructor(name, color){
    this.name = name;
    this.color = color;
  }
  eat(){
    return `${this.name} is eating`;
  }
  climb(){
    return `${this.name} is climbing`;
  }
}

class FlyingSquirrel extends Squirrel{
  constructor(name, color, maxDistance){
    super(name, color);
    this.maxDistance = maxDistance;
  }

  fly(){
    // if(distance > this.maxDistance){
    //   throw new RangeError('You can`t fly further than max distance');
    // }

    return `${this.name} is flying in ${Math.ceil( Math.random()* this.maxDistance)} metires`
  }
}
const flySquirrel = new FlyingSquirrel("Leton", "orange", 130);

class FableSquirrel extends FlyingSquirrel{
  constructor(name, color, maxDistance, repertuar){
    super(name, color, maxDistance);
    this.repertuar = repertuar;
  }
  sing(){
    this.repertuar.forEach(song => {
      console.log(`${this.name} is sing for you '${song}' la-la-lala`);
    });
  }
  dance(){
    return `${this.name} is densing`
  }
}
const fableSquirrel = new FableSquirrel('Fable', 'white', 60, ['smells like ten spiret', 'Save me', 'Dence with the divil']);