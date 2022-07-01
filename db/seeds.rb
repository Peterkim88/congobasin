# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Product.destroy_all
Review.destroy_all

user1 = User.create({name: 'Peter Kim', email: 'peterkim@gmail.com', password: 'peterkim'})
user2 = User.create({name: 'David Kim', email: 'davidkim@gmail.com', password: 'davidkim'})
user3 = User.create({name: 'Demo User', email: 'demo@demo.com', password: 'demodemo'})
user4 = User.create({name: 'Test User', email: 'test@test.com', password: 'testtest'})

product1 = Product.create({
  product_name:
  'Scott ComfortPlus Toilet Paper, 36 Mega Rolls, 425 Sheets per Roll, 
  Septic-Safe, 1-Ply Toilet Tissue',
  product_description:
  'Contains 36 mega toilet paper rolls, with 425 sheets per roll. 
  36 mega toilet paper rolls = 144 regular rolls. 
  3X stronger 1-layer toilet paper vs. the leading value brand.
  Thick & plush sheets provide a trusted, comforting clean.',
  product_price:
  28.99,
  product_category:
  'Health & Personal Care',
  product_quantity:
  300
})
product2 = Product.create({
  product_name:
  'Colgate Total Whitening Toothpaste 
  with Stannous Fluoride and Zinc, Exclusive, 
  Whitening Mint, 4.8 Oz (Pack of 4)',
  product_description:
  'Breakthrough formula. 
  Whitening toothpaste that removes and prevents new stains. 
  Fights bacteria on teeth, tongue, cheeks and gums for 
  whole mouth healthy.
  Mint toothpaste for long lasting fresh breath.
  Helps prevent plaque, tartar, cavities and gingivitis.',
  product_price:
  16.98,
  product_category:
  'Health & Personal Care',
  product_quantity:
  300
})
product3 = Product.create({
  product_name:
  'Pantene, Shampoo and Conditioner 2 in 1, Pro-V Classic 
  Clean, 25.4 Fl Oz, Pack of 2',
  product_description:
  'You will receive (2) 25.4 fl ounces bottles of 2 in 1 
  Shampoo and Conditioner Classic Clean 2 In 1 Shampoo & 
  Conditioner delivers gentle cleansing & conditioning 
  perfect for daily use & any hair type. Strengthens hair 
  against damage. Makes hair shiny, manageable, and healthy 
  looking. Nourishing formula with antioxidants ; Instant 
  strength,moisture, & shine - SILICONE-FREE',
  product_price:
  16.99,
  product_category:
  'Health & Personal Care',
  product_quantity:
  300
})
product4 = Product.create({
  product_name:
  '4 Pack Plush Velour 100% Cotton Beach Towels. Cabana Stripe 
  Pool Towels for Adults. (Charcoal Grey, 4 Pack- 30" x 60")',
  product_description:
  "OVERSIZED BEACH AND POOL TOWELS: Made of 100% cotton for 
  supreme comfort and luxury. SOFT, ABSORBENT AND DURABLE: 
  Heavyweight, plush cotton provides ultimate softness, 
  absorbency and durability. CHOOSE FROM 8 BEAUTIFUL STRIPE 
  COLORS: Green, Charcoal Grey, Air Blue, Navy, Teal, Orange, 
  Red, or Pink. EASY CARE: Machine washable and long-lasting.
  100% SATISFACTION GUARANTEED: Customer satisfaction is of 
  utmost importance to us. We're confident you'll love our 
  products, but if you're not 100% SATISFIED, our customer 
  service team will work with you to make it right!",
  product_price:
  56.99,
  product_category:
  'Health & Personal Care',
  product_quantity:
  200
})
product5 = Product.create({
  product_name:
  '4 Pack Plush Velour 100% Cotton Beach Towels. Cabana Stripe 
  Pool Towels for Adults. (Charcoal Grey, 4 Pack- 30" x 60")',
  product_description:
  "OVERSIZED BEACH AND POOL TOWELS: Made of 100% cotton for 
  supreme comfort and luxury. SOFT, ABSORBENT AND DURABLE: 
  Heavyweight, plush cotton provides ultimate softness, 
  absorbency and durability. CHOOSE FROM 8 BEAUTIFUL STRIPE 
  COLORS: Green, Charcoal Grey, Air Blue, Navy, Teal, Orange, 
  Red, or Pink. EASY CARE: Machine washable and long-lasting.
  100% SATISFACTION GUARANTEED: Customer satisfaction is of 
  utmost importance to us. We're confident you'll love our 
  products, but if you're not 100% SATISFIED, our customer 
  service team will work with you to make it right!",
  product_price:
  56.99,
  product_category:
  'Health & Personal Care',
  product_quantity:
  200
})
Review.create({
  author_id: user4.id, 
  author_name: user4.name,
  product_id: product1.id,
  review_rating: 3, 
  review_body: "review test is working!!"
})
Review.create({
  author_id: user3.id, 
  author_name: user3.name,
  product_id: product1.id,
  review_rating: 3, 
  review_body: "review test is working!!"
})
Review.create({
  author_id: user1.id, 
  author_name: user1.name,
  product_id: product2.id,
  review_rating: 3, 
  review_body: "review test is working!!"
})
Review.create({
  author_id: user2.id, 
  author_name: user2.name,
  product_id: product3.id,
  review_rating: 3, 
  review_body: "review test is working!!"
})
CartItem.create({
  user_id: user4.id,
  product_id: product1.id,
  quantity: 2
})
CartItem.create({
  user_id: user4.id,
  product_id: product3.id,
  quantity: 1
})
CartItem.create({
  user_id: user1.id,
  product_id: product3.id,
  quantity: 3
})
CartItem.create({
  user_id: user1.id,
  product_id: product2.id,
  quantity: 5
})