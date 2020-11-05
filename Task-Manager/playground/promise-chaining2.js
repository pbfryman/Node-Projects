require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndRemove('5f9df4fadb321e1f5faaa860').then((task) => {
//   console.log(task);
//   return Task.countDocuments({completed: false})
// }).then((result) => {
//   console.log(result);
// }).catch((e) => {
//   console.log(e);
// });

const deleteTaskAndCount = async (id, completed) => {
  const task = await Task.findByIdAndRemove(id);
  const count = await Task.countDocuments({completed: false});
  return count;
};

deleteTaskAndCount('5f9de5a428eefc1891649ca2', false).then((count) => {
  console.log('Count:', count);
}).catch((e) => {
  console.log('Error:', e);
});