# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Goat.destroy_all
# User.destroy_all

# puts ".... Generating Goats"
# 20.times do 
#   Goat.create(name: Faker::FunnyName.name, age: rand(20..100), living: true, img_url: Faker::Fillmurray.image, occupation: Faker::Job.field)
# end 

goats = [
  {name: "Michael Jordan", age: 57, living: true, occupation: "Basketball", img_url: "https://sportshub.cbsistatic.com/i/r/2020/04/19/a87839f8-23c1-4bd4-9f74-2f8433f8ff93/thumbnail/1200x675/c3ea5fbf4fa89ecd32e1299097fa63ba/michael-jordan-getty.jpg"},
  {name: "Vincent can Gogh", age: 0, living: false, occupation: "Painter", img_url: "https://www.vincentvangogh.org/images/self-portrait.jpg"},
  {name: "Bugs Bunny", age: 90, living: true, occupation: "Cartoon", img_url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png"},
  {name: "David Heinemeier Hansson", age: 40, living: true, occupation: "Programming", img_url: "https://pbs.twimg.com/profile_images/975876868455809024/eK7mDppU_400x400.jpg"},
  {name: "Gordon James Ramsay", age: 53, living: true, occupation: "Chef", img_url: "https://2.bp.blogspot.com/-y9mU0--WxHQ/VknYyaQv9JI/AAAAAAAABRY/8opeB3hstYM/s1600/Gordon-Ramsay-007.jpg"},
  {name: "The Beatles", age: 60, living: true, occupation: "Music", img_url: "https://cdn.britannica.com/18/136518-050-CD0E49C6/The-Beatles-Ringo-Starr-Paul-McCartney-George.jpg"},
  {name: "Superman", age: 82, living: true, occupation: "Comic Book", img_url: "https://lh3.googleusercontent.com/proxy/8GL5XtlFeFKWZ2lZzSA3syK8bDDlF3F9MPShs38DzSAwu3GUmfhy5hxkWtlpm8v8cfacj_AMbW9omu-k51q5-3B4RAyzO4YbmsZBVEStjZbbnNXU5i8uCL54iUdccK_Gbf4TqGIBPgNDnKzQk6M"},
  {name: "Michelle Kwan", age: 39, living: true, occupation: "Ice Skating", img_url: "https://i.ytimg.com/vi/m1vIwFhNhPM/maxresdefault.jpg"},
  {name: "stephen king", age: 72, living: true, occupation: "Author", img_url: "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/04/Stephen-King.jpg"},
  {name: "J.K Rowling", age: 54, living: true, occupation: "Author", img_url: "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/04/Stephen-King.jpg"},
  {name: "Lisa Leslie", age: 47, living: true, occupation: "Basketball", img_url: "https://d1l5jyrrh5eluf.cloudfront.net/wp-content/uploads/2015/08/lisa_leslie.jpg"}
]

puts ".... Generating Goats"
goats.each do |goat|
  Goat.create(goat)
end 

# users = [
#   {name: 'Coralfussman', img_url: 'https://ca.slack-edge.com/T02MD9XTF-U01083YN6CA-07e236f1fe28-512'},
#   {name: 'Brandon Yoon', img_url: 'https://ca.slack-edge.com/T02MD9XTF-U010ARCG14H-fcfdf6775708-512'},
#   {name: 'Daniel Kersten', img_url: 'https://ca.slack-edge.com/T02MD9XTF-U010LT11AM6-8dc58050a731-512'},
#   {name: 'Edgar Rivera', img_url: 'https://ca.slack-edge.com/T02MD9XTF-UTV12MJBG-c6fb5b39ab15-512'},
#   {name: 'Elias Taveras', img_url: 'https://ca.slack-edge.com/T02MD9XTF-U010ZSA826A-ffba90f92886-512'},
#   {name: 'Elizabeth Karen', img_url: 'https://ca.slack-edge.com/T02MD9XTF-U010LTN1B61-d45851c6de5d-512'},
#   {name: 'Garen Sahagian', img_url: 'https://ca.slack-edge.com/T02MD9XTF-U010ARCHG3T-fa38f2a2c267-512'},
#   {name: 'Ian Grubb', img_url: 'https://ca.slack-edge.com/T02MD9XTF-UKLTXS2LU-93c15b2245eb-512'},
#   {name: 'John Zhang', img_url: 'https://ca.slack-edge.com/T02MD9XTF-UTSQX1MT7-2ce9858771a8-512'},
#   {name: 'Jordan Melidor', img_url: 'https://ca.slack-edge.com/T02MD9XTF-U010LTN2013-f78acb3da6bd-512'},
#   {name: 'Kat Maldon', img_url: 'https://ca.slack-edge.com/T02MD9XTF-U010S0FNPB6-792446a6ac06-512'},
#   {name: 'Luis', img_url: 'https://ca.slack-edge.com/T02MD9XTF-U010LT13124-18d6e024475f-512'},
#   {name: 'Maharaj Syed', img_url: 'https://ca.slack-edge.com/T02MD9XTF-UTV12RR62-cdbdc4226119-512'},
#   {name: 'Matthew Masiello', img_url: 'https://ca.slack-edge.com/T02MD9XTF-UFLH3KMEV-361ad28cf909-512'},
#   {name: 'Melissa Wise', img_url: 'https://ca.slack-edge.com/T02MD9XTF-UUQ1DMAHH-f29558040e6d-512'},
#   {name: 'Michelle Frattaroli', img_url: 'https://ca.slack-edge.com/T02MD9XTF-U01083YQGUA-25c685fee626-512'},
#   {name: 'Michael Jiang', img_url: 'https://ca.slack-edge.com/T02MD9XTF-U010KJG9GGY-63aa8f4f9b3b-512'},
#   {name: 'Ramon Echeverria', img_url: 'https://ca.slack-edge.com/T02MD9XTF-U010MQQRC0N-f7e942518a93-512'},
#   {name: 'Shobhit Ratan', img_url: 'https://ca.slack-edge.com/T02MD9XTF-UTGL2F8TB-0c1149111a22-512'},
#   {name: 'Stephen Cases', img_url: 'https://ca.slack-edge.com/T02MD9XTF-U010LT13T5E-6e3271d23aa4-512'},
#   {name: 'Tachawn Williams', img_url: 'https://ca.slack-edge.com/T02MD9XTF-U7PSME4DA-8b811931b3d9-512'},
#   {name: 'Urgen Sherpa', img_url: 'https://ca.slack-edge.com/T02MD9XTF-UV11S4QJG-473d4b6d3d08-512'},
#   {name: 'William Lin', img_url: 'https://ca.slack-edge.com/T02MD9XTF-UV1FPP00M-9c56ba191861-512'},
#   {name: 'Yoichi Nagano', img_url: 'https://ca.slack-edge.com/T02MD9XTF-U0106QTV84A-8c1be22e5237-512'}
# ]

# puts "...Creating Users"
# users.each do |user|
#   User.create(user)
# end 