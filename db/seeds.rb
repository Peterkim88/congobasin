# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Product.destroy_all

User.create({name: 'Peter Kim', email: 'peterkim@gmail.com', password: 'peterkim'})
User.create({name: 'David Kim', email: 'davidkim@gmail.com', password: 'davidkim'})
User.create({name: 'Demo user', email: 'demo@demo.com', password: 'demodemo'})

Product.create({
  product_name:
  'Scott ComfortPlus Toilet Paper, 36 Mega Rolls, 425 Sheets per Roll, 
  Septic-Safe, 1-Ply Toilet Tissue',
  product_description:
  'Contains 36 mega toilet paper rolls, with 425 sheets per roll. 
  36 mega toilet paper rolls = 144 regular rolls. 
  3X stronger 1-layer toilet paper vs. the leading value brand.
  Thick & plush sheets provide a trusted, comforting clean.',
  product_price:
  '$28.99',
  product_category:
  'Health & Personal Care',
  product_quantity:
  300
})
Product.create({
  product_name:
  'Colgate Total Whitening Toothpaste 
  with Stannous Fluoride and Zinc, Exclusive, 
  Whitening Mint, 4.8 Oz (Pack of 4)',
  product_description:
  'Breakthrough formula. 
  Whitening toothpaste that removes and prevents new stains. 
  Fights bacteria on teeth, tongue, cheeks and gums for whole mouth healthy.
  Mint toothpaste for long lasting fresh breath.
  Helps prevent plaque, tartar, cavities and gingivitis.',
  product_price:
  '$16.98',
  product_category:
  'Health & Personal Care',
  product_quantity:
  300
})