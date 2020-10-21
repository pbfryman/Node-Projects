const greeter = (name = 'user', age = 0) => {
  console.log('Hello ' + name)
  console.log('Age ' + age)
}

greeter('Andrew', 27)

greeter()