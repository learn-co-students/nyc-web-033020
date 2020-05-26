require 'pry'

class Person
  attr_accessor :age, :name, :interests

  def initialize(age, name, interests)
    @name = name
    @age = age
    @interests = interests
  end

  def bio
    "This is #{@name}. They are #{@age} years old."
  end

  def greeting
    raise "All subclasses of Person have to define a greeting method"
  end

  def self.hey_there
    puts "Hey there"
  end
end

class Student < Person
  attr_accessor :grade
  
  def initialize(age, name, interests, grade)
    super(age, name, interests)
    @grade = grade
  end

  def greeting
    "Hi! My name is #{@name} and I like #{@interests.join(', ')}. I'm in grade #{@grade}."
  end
end

class Teacher < Person
  attr_accessor :subject

  def initialize(age, name, interests, subject)
    super(age, name, interests)
    @subject = subject
  end

  def greeting
    "Hi! My name is #{@name} and I like #{@interests.join(', ')}. I teach #{@subject}."
  end
end


steven = Student.new("none of your bizness", "Steven", ["knitting", "carving spoons"], 11)
ian = Teacher.new(12, "Ian", ["GraphQL", "botany"], "Logic")

binding.pry
puts 'okthxbye' 