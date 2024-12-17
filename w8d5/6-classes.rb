# What's a class ?

# A group of students
# A blueprint

# User => name, admin_status, greet, farewell

class Potato
  def initialize name, type, admin
    @name = name
    @type = type
    @admin = admin  
  end

  attr_reader :name
  attr_writer :name
  attr_accessor :type

  def admin?
    @admin
  end

  def greet
    puts "Hi, my name is #{@name}"
    puts "And I'm an admin" if @admin
    puts "And I'm not an admin" unless @admin
  end

end


potator = Potato.new("Potator the Third", "Russett", true)
patata = Potato.new("Patata le tata", "Irish Cobbler", false)

potator.name = "BAD NAME!"

p potator.name
p patata.admin?


potator.greet