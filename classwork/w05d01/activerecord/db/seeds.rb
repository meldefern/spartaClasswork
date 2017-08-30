# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
Picture.destroy_all

Picture.create([
	{name: 'Phil Murray', description: 'Solid Gold.', artist: 'Self.', url: 'https://fillmurray.com/g/300/300'},
	{name: 'Jill Murray', description: 'My Name Is Not Jill', artist: 'Van Gogh.', url: 'https://fillmurray.com/g/301/300'},
	{name: 'Paul Murray', description: 'Don\'t Let Me Down.', artist: 'BeatleMurray.', url: 'https://fillmurray.com/g/302/300'}

])