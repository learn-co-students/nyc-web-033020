class Person {
  constructor(name, age, interests){
    this.name = name
    this.age = age
    this.interests = interests
  }

  bio(){
    return `${this.name} is ${this.age} years old. They enjoy ${this.interests.join(', ')}.`
  }

  greeting(){
    throw 'The greeting function must be implemented by subclasses of Person'
  }
}

class Student extends Person{
  constructor(name, age, interests, grade){
    super(name, age, interests)
    this.grade = grade
  }

  greeting(){
    return `Hi, my name is ${this.name}. I'm in grade ${this.grade}`
  }
}

class Teacher extends Person{
  constructor(name, age, interests, subject){
    super(name, age, interests)
    this.subject = subject
  }

  greeting(){
    return `Hi, my name is ${this.name}. I'm teach ${this.subject}`
  }
}