Basketball.delete_all
Player.delete_all
Game.delete_all

#destroy will create and return an instance of the thing it's deleting
#delete will just delete

bb1 = Basketball.create(brand: "spalding")
bb2 = Basketball.create(brand: "adidas")

p1 = Player.create(first_name: "Tashawn")


g1 = Game.create(day: "Monday", player: p1, basketball: bb1)