# Blocks!

# YIELD
# Picking 5 baskets of raspberries will yield 10 pots of jam

list_of_names = %w[Angelo Ed Rod Michael Andrew Vitor]

def generate_greeting_message name
  "Hi #{name}"
end

def make_it_fancy
  puts "✨✨💗💗💫💫💫"
  puts yield
  puts "✨✨💗💗💫💫💫"
end

def say_hi_everyone list_of_names
  list_of_names.each do |name|
    sleep 1
    make_it_fancy {generate_greeting_message name}
  end
end

make_it_fancy { generate_greeting_message "Bob" }

say_hi_everyone list_of_names