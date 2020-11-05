require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('5f9de4c95a253517fe1fde46', {age: 1}).then((user) => {
//   console.log(user);
//   return User.countDocuments({age: 1})
// }).then((result) => {
//   console.log(result);
// }).catch((e) => {
//   console.log(e);
// });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, {age});
  const count = await User.countDocuments({age});
  return count;
};

updateAgeAndCount('5f9de4c95a253517fe1fde46', 2).then((count) => {
  console.log('Count:', count);
}).catch((e) => {
  console.log('Error: ', e);
});