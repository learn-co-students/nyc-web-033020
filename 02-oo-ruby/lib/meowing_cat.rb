## code your solution here. 
class Cat
    attr_accessor :name

    def initialize(name = nil)
        @name = name
    end

    # def name
    #     @name
    # end
    # def name=(name)
    #     @name = name
    # end

    def meow
        puts "meow!"
    end
end