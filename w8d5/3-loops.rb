list_of_names = %w[Angelo Ed Rod Michael Andrew Vitor]
some_user = {
  name: "Bob",
  email: "bob@bby.com",
  admin?: true
}

# each

list_of_names.each do |name|
  puts "Hello #{name}"
end

some_user.each do |something|
  p something
end

# each_with

list_of_names.each_with_index do |name, index|
  puts "The name #{name} is at position #{index} in the array"
end

# for

for key_value in some_user
  p key_value
end

# .times
amount = 10
amount.times do |number|
  puts "Wiggle, #{number}"
end


# .upto

20.upto(50) do |number|
  puts number
end

0.downto(-10) do |number|
  puts number
end

(10..20).step(4) do |number|
  puts number
end

