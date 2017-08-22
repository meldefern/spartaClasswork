# raining = true
# ollie = "burned"

# if raining
# 	puts "yo"
# end

# if raining then puts "yo" else puts "home" end


# if ollie == "tanned"
# 	puts "what a god"
# elsif ollie == "burned"
# 	puts "lobster"
# else
# 	puts "pasty"
# end

# #ternary
# puts raining ? "yo" : "home"

# if !ollie.eql? "tanned" then puts "yeeeeeah" end

puts "Welcome to the game, what's your name?"
name = gets.chomp

puts "You're in a forest, in front of you is a glowing wooden box, hanging from the tree is a key, to the left is a path. Which do you choose? box, tree, path"
answer_1 = gets.chomp

if answer_1 == "box"
	puts "you need a key for this"
	answer_1 = gets.chomp
elsif answer_1 == "tree"
	puts "you grab the key but it's burning, use it quick!"
	puts "you open the box, and inside is a marble, a feather, and a ring."
	puts "What do you want to do? pick up the items?"
elsif answer_1 == "path"
	puts "you follow the path to a golden house"
	puts "do you knock and wait, or knock and run?"
else
	puts "that wasn't an option"
end

answer_2 = gets.chomp
if answer_2.eql? "go back" then puts "you grab the key but it burns up"
elsif answer_2.eql? "pick up the items" then puts "you put the objects in your pocket and follow the path"
elsif answer_2.eql? "knock and wait" then puts "an old troll opens the door"
elsif answer_2.eql? "knock and run" then puts "you little shit"
