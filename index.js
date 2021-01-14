'use strict';

class Friend {
  constructor(count = 0, friends = []) {
    this.count = count;
    this.friends = friends;
  }

  countA() {
    let result = this.count;


    if (this.friends.length) {
      result = this.friends.reduce(
        (result, friend) => {
          return result + friend.countA();
        },
        this.count
      );
    }

    // if (this.friends.length) {
    //   this.friends.forEach((elem) => {
    //     if(elem.friends.length){
    //       result += elem.countA();
    //     }else{
    //       result += elem.count;
    //     }
    //   });
    // }

    return result;
  }
}
const f4 = new Friend(4)
const f3 = new Friend(3)
const f2 = new Friend(2, [f3, f4])
const f1 = new Friend(1)
const me = new Friend(5, [f1, f2]);
