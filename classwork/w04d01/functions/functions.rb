def say_hello
	puts "Hello, world"
end

say_hello

def add_numbers num, num2
	puts num + num2
end

add_numbers 5, 10

def create_user name, course="WebDev2"
	puts "#{name} is in #{course}"
end

create_user "Richard"
create_user "Bob", "SDET10"

def say_more_words *words
	puts words
end

say_more_words "these", "are", "more", "words"

def say what, *people
	people.each do |person|
		puts "Hey #{person}, #{what}"
	end
end

say "Hello", "Steve", "Bob"

def add_numbers2 num1, num2
	num1 + num2
end

result = add_numbers2 1, 2
puts result