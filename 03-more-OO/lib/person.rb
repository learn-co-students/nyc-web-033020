# your code goes here
require 'pry'
class Person
    attr_reader :name, :happiness, :hygiene
    attr_accessor :bank_account
    @@all_persons = []
    # ALL = []

    def initialize(hygiene = 8)
        @name = name
        # @bank_account = bank_account
        # @happiness = happiness
        @hygiene = hygiene
        # self == instance
        Person.all << self 
   
    end

    def happiness=(number)
        if number > 10
            @happiness = 10
        elsif number < 0 
            @happiness = 0
        else 
            @happiness = number 
        end
    end


    def happy?
        self.happiness > 7
    end
    def clean?
        self.hygiene > 7
    end
    

    def get_paid(salary)
        #how do I access this Peron's bank account
        # @bank_account
        self.bank_account += salary
        'all about the benjamins'
    end
    def take_bath
        self.hygiene += 4
    end
    
    def call_friend(friend)
        self.happiness += 3
        friend.happiness += 3
    end

    # return a list of every person
    # instance or class?

    def self.all 
        @@all_persons
    end

    private 

    def hygiene=(number)
        if number > 10
            @hygiene = 10
        elsif number < 0 
            @hygiene = 0
        else 
            @hygiene = number 
        end
    end


end


person = Person.new

binding.pry 

"string"
