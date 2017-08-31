# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

authors = Author.create([
	{ name: 'Sylvia Plath'},
	{ name: 'Neil Gailman' },
	{ name: 'Stephen King' }

])

books = Book.create([
	{ title: 'The Bell Jar', description: '1963', author_id: 1},
	{ title: 'Ariel', description: '1965', author_id: 1 },
	{ title: 'American Gods', description: '2001', author_id: 2 },
	{ title: 'Good Omens', description: '1990', author_id: 2 },
	{ title: 'Carrie', description: '1974', author_id: 3 },
	{ title: 'Misery', description: '1987', author_id: 3 }

])