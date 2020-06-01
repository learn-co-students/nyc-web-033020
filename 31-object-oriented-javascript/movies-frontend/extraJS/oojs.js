class Person {
  constructor(age, name, interests){
    this.age = age
    this.name = name
    this.interests = interests
  }

  bio(){
    return `This is ${this.age}. They are ${this.name} years old.`
  }

  greeting(){
    throw "All subclasses of Person have to define a greeting method"
  }
}

class Student extends Person {
  constructor(age, name, interests, grade){
    super(age, name, interests)
    this.grade = grade
  }

  greeting(){
    return `Hi! My name is ${this.name} and I like ${this.interests.join(', ')}. I'm in grade ${this.grade}.`
  }
}


let steven = new Student('Steven', 'mind your own biz', ["knitting", "cooking"], 11)
