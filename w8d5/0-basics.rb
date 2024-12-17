# EVERYTHING IS AN OBJECT
# Numbers

p 10.5.to_s
puts 0

# Strings & ' vs " & #{}

name = 'Pequeno Pollo'
greet = "Hello #{name}"

puts greet # Puts will try to make it client friendly
p greet # Raw output of the content

# Puts vs P

# String

# Array

some_list = [1, 2, 3, 4, 5]

puts some_list
p some_list

# undefined, null, nil

nil

p greet.upcase!
p greet

p some_list.reverse!

cities = %w[Montréal Calgary Toronto Victoria Ottawa]
francis_visited = %w[Montréal Toronto Ottawa]

bob = [1, 'Something', 'Two words']
remaining_cities = cities - francis_visited

p remaining_cities.empty?

