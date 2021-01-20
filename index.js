const user1 = {
  id: 1,
  name: "John",
  age: 18,
};

const user2 = {
  id: 2,
  name: 'Jane',
  age: 24,
};

const johnMsgs = ['dasda', 'dasda', '132'];
const janeMsgs = ['fafeaw', 'dar3rsacasda', '1dawdaderfthd32'];

const userMsgs = new Map();
userMsgs.set(user1.id, johnMsgs);
userMsgs.set(user2.id, janeMsgs);

const getUserMsgs = (userId) => {
  if (userMsgs.has(userId)) {
    return userMsgs.get(userId)
  }
  throw new Error('not existing user!');
}