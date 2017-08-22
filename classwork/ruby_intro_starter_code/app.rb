require 'pp'
require 'mac/say'

# Get all the voices
pp Mac::Say.voices

puts Mac::Say.say "Hi, This is about as basic as Ruby script can be. Hope you enjoy it. Right, I'm off";
