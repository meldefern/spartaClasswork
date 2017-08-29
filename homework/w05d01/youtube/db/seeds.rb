# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
Video.destroy_all

Video.create([
	{title: 'Chet Baker - Almost Blue', description: 'Published on Jan 6, 2009', url: 'z4PKzz81m5c'},
	{title: 'Paul Simon - Diamonds On The Soles Of Her Shoes', description: 'Published on Jun 16, 2011', url: '-I_T3XvzPaM'},
	{title: 'Amy Winehouse - Will You Still Love Me Tomorrow', description: 'Published on Jun 13, 2007', url: 'Ludxpkyrab0'}
])