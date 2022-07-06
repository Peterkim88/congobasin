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
  300,
  image_url:
  "product1ImageURL"
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
  300,
  image_url:
  "product2ImageURL"
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
  300,
  image_url:
  "product3ImageURL"
})
product4 = Product.create({
  product_name:
  'Chakir Turkish Linens Premium Quality 100% Cotton Turkish 
  Cabana Thick Stripe Pool Beach Towels 4-Pack (Light Blue, 
  30x60 Inch)',
  product_description:
  "LUXURY TOWELS: These amazing pool beach towels are made 
  with 100% Genuine Turkish Cotton which is extremely soft, 
  absorbent and warm. The hems are professionally double 
  stitched for increased durability and long-life satisfying 
  user experience.
  EXTREMELY SOFT: Turkish Cotton is known as having long fibers 
  that provide a beautiful and fluffy texture. These towels 
  are extremely SOFT, SMOOTH, and COMFORTABLE for your skin. 
  More you use it, more it softens. It is a lot softer than a 
  standard towel.
  CONTENT: The set includes 4 pieces pool beach towels measuring 
  30 by 60 inches each.",
  product_price:
  46.99,
  product_category:
  'Health & Personal Care',
  product_quantity:
  200,
  image_url:
  "product4ImageURL"
})
product5 = Product.create({
  product_name:
  'Elviros Cervical Memory Foam Pillow, Contour Pillows for 
  Neck and Shoulder Pain, Ergonomic Orthopedic Sleeping Neck 
  Contoured Support Pillow for Side Sleepers, Back and Stomach 
  Sleepers (Grey)',
  product_description:
  "REDUCE NECK & BACK PAIN: Proven contour design perfectly 
  supports and aligns your head, neck, shoulder, and back. The 
  slope keeps your head from rolling out of a stable position. 
  Bringing a reduction of stress in the cervical vertebra and 
  pine. Improving sleep and relieving neck and shoulder pain, 
  discomfort rejuvenating your body.THIS PRODUCT IS NOT A MEDICAL 
  PRODUCT. IF YOU NEED TO USE IT FOR REHABILITATION, PLEASE ASK 
  YOUR DOCTOR FOR ADVICE.
  ERGONOMIC DESIGN: Elviros contour pillows are well designed 
  to support by following the natural curve of your body keeps 
  air passages optimal for less snoring and more restful sleep. 
  The cutouts on the side give your top arm a place to rest and 
  keep it at an angle so your shoulder is not hunching over in 
  front of you.",
  product_price:
  49.99,
  product_category:
  'Health & Personal Care',
  product_quantity:
  200,
  image_url:
  "product5ImageURL"
})
product6 = Product.create({
  product_name:
  "Tribesigns U Shaped Computer Desk with Hutch, 74.8 Inches 
  Gaming Desk with Monitor Stand Shelf, Black Gamer Command 
  Center Workstation Desk for Gaming (Black)",
  product_description:
  "With its streamlined U-shaped design give you the ultimate 
  immersive gaming experience, Widened 74.8-inch extra long 
  desktop with monitor stand shelf provides enough space for 
  your monitor, keyboard, laptop, and gaming gears.
  Keep the gaming action at eye level with the raised desktop 
  monitor shelf, and fits up to three monitors that give you 
  customizable vantage points. Underneath the monitor, the stand 
  is ample space for speakers, stapler, notepads, phone dock, or 
  whatever you want in grabbing distance.",
  product_price:
  239.99,
  product_category:
  'Furniture',
  product_quantity:
  100,
  image_url:
  "product6ImageURL"
})
product7 = Product.create({
  product_name:
  "Walkie Talkies - COTRE Two Way Radios for Adults, 2W, 5 Miles Suburban Transmission Distance USB Rechargeable Walkie Talkies/ 2662 Channels, IP67 Waterproof, SOS & VOX, Army Green (2 Pack)",
  product_description:
  "COTRE Swan walkie talkies are specialized for outdoor activities. IP67 submersible waterproof & 5ft drop resistant sturdy body withstand all conditions in the wild. Extra bright lamplight & LCD display provide clear look in dark. 20hrs using time & smart battery saver dismiss your worry about losing contacts.
  Up to 32 miles communication range between two top of mountains, 14 miles at open sea, 5 miles in neighbourhood and 1 mile in city. The talk range varies significantly in different environments.",
  product_price:
  32.99,
  product_category:
  "Electronics",
  product_quantity:
  100,
  image_url:
  "product7ImageURL"
})
product8 = Product.create({
  product_name:
  "CUCKOO CRP-P0609S | 6-Cup (Uncooked) Pressure Rice Cooker | 12 Menu Options: Quinoa, Nu Rung Ji, GABA/Brown Rice & More, Made in Korea | Black/Copper",
  product_description:
  "MULTI-FUNCTIONAL: Its LED display panel has 12 menu options including pressure cook, GABA rice, brown rice, white rice, porridge, nu rung ji, and more to easily make a variety of different meals while its reheat function is optimal for leftovers
  EFFICIENT & SMART: Features simple touch controls, a preset timer, an auto-clean function, and Fuzzy Logic technology—the cooker will automatically detect and adjust its temperature and pressure accordingly for perfectly cooked rice every time",
  product_price:
  209.13,
  product_category:
  "Kitchen",
  product_quantity:
  100,
  image_url:
  "product8ImageURL"
})
product9 = Product.create({
  product_name:
  "Fresh Produce Vegetable Fruit Storage Containers 3 Set with Time Recording,BPA-free Fridge Storage Container, Salad Container and Fridge Organizers,Yellow(Not Dishwasher Safe)",
  product_description:
  "【Fresh Fridge Containers】ERISED fruit container sets come with 21 cup（5.3 Quart）, 10 cup (2.6 Quart)and 5 cup (1.2 Quart)three of containers. Each of storage container's lid designed with adjustable vents which can regulate the flow of air in and out, control the humidity inside, help prevent spoilage, keep fruits and vegetables fresh for up to two weeks for maximum freshness. If you want sealed storage, just press down the silicone piston of the vent.
  【Widely use&Sealing or ventilation 】The fridge container comes with a filterable basket and a partition. The basket can be used as a colander to wash your fruits and vegetables, or to strain out water while cooking foods like pasta or mashed potatoes. The partition is used to separate different foods in the container to prevent food from squeezing each other.",
  product_price:
  16.79,
  product_category:
  "Kitchen",
  product_quantity:
  100,
  image_url:
  "product9ImageURL"
})
product10 = Product.create({
  product_name:
  "NutriChef Nonstick Cookware Excilon Home Kitchen Ware Pots & Pan Set with Saucepan, Frying Pans, Cooking Pots, Lids, Utensil PTFE/PFOA/PFOS Free, 11 Pcs, Blue",
  product_description:
  "11-PIECE SET: NutriChef offers a 11-piece nonstick cookware set which includes 1. 7qt saucepan pot w/ lid, 3. 6qt dutch oven pot w/ lid, 2. 1qt cooking pot w/ lid, 11” large fry pan, 8” small fry pan, soup ladle, pasta fork, and spatula
  NON-STICK COATING: The non stick pot set cooking ware features a durable and long lasting nonstick coating for easy tossing, cleaning & healthy cooking. Features blue diamond ceramic exterior which makes the pot more durable & w/ better heat transfer",
  product_price:
  61.78,
  product_category:
  "Kitchen",
  product_quantity:
  100,
  image_url:
  "product10ImageURL"
})
product11 = Product.create({
  product_name:
  "Baby Wipes, Pampers Sensitive Water Based Baby Diaper Wipes, Hypoallergenic and Unscented, 8 Pop-Top Packs with 4 Refill Packs for Dispenser Tub, 864 Total Wipes (Packaging May Vary)",
  product_description:
  "Includes: 8 Pampers Sensitive Perfume Free Pop-Top Packs (72 ct) and 4 Pampers Sensitive Perfume Free Refill Packs (72 ct), all bundled together for you
  Our exclusive one-wipe dispensing pop-top prevents unwanted wipes from coming out of the pack
  #1 Choice of U S Hospitals based on hospital sales data
  pH balancing formula helps protect sensitive skin
  Free of alcohol, perfume, parabens, phenoxyethanol, and dyes 20% thicker for a soft and comfortable clean vs Pampers Complete Clean
  20% thicker for a soft and comfortable clean vs Pampers Complete Clean Dermatologist-tested and hypoallergenic
  Dermatologist-tested and hypoallergenic
  Refill Packs are designed for use with Pampers tubs",
  product_price:
  29.99,
  product_category:
  "Baby",
  product_quantity:
  100,
  image_url:
  "product11ImageURL"
})
product12 = Product.create({
  product_name:
  "Premier Protein Shake, Bananas & Cream, 30g Protein, 1g Sugar, 24 Vitamins & Minerals, Nutrients to Support Immune Health, 12 Pack, 138.0 Fl Oz",
  product_description:
  "This smooth, delectable shake helps get you the protein your body needs with bananas and cream taste; Winner of American Masters of Taste Gold Medal for SUPERIOR TASTING ready-to-drink protein beverages
  30g of protein to help curb your hunger, as a mid-day snack or for post workout recovery; includes all essential amino acids
  24 Vitamins and Minerals: Support a healthy immune system as part of a healthy diet and lifestyle (Antioxidants Vitamins C and E plus Zinc), 50 percent daily value of calcium and 30 percent daily value of Vitamin D to help maintain healthy bones",
  product_price:
  48.51,
  product_category:
  "Sports Nutrition",
  product_quantity:
  100,
  image_url:
  "product12ImageURL"
})
product13 = Product.create({
  product_name:
  "Wyze Cam v3 with Color Night Vision, Wired 1080p HD Indoor/Outdoor Video Camera, 2-Way Audio, Works with Alexa, Google Assistant, and IFTTT",
  product_description:
  "Color night vision: An all-new Starlight Sensor records night time video in full, vivid color. The Starlight Sensor can see full color in environments up to 25x darker than traditional video cameras and the new f/1.6 aperture captures 2x more light.
  Indoor/Outdoor: Wyze Cam v3 is a wired video camera with an IP65 rating so you can confidently install it outside in the rain or inside in the kids’ room. Wyze Outdoor Power Adapter (sold separately) required for outdoor use. Phone Compatibility - Android 5.0+, iOS 9.0+.",
  product_price:
  35.98,
  product_category:
  "Camera",
  product_quantity:
  100,
  image_url:
  "product13ImageURL"
})
product14 = Product.create({
  product_name:
  'Scotch Heavy Duty Packaging Tape, 1.88" x 22.2 yd, Designed for Packing, Shipping and Mailing, Strong Seal on All Box Types, 1.5" Core, Clear, 6 Rolls with Dispenser (142-6)',
  product_description:
  'Guaranteed to Stay Sealed (If your box does not stay sealed, 3M will refund the purchase price of this tape. Proof of purchase required.)
  Provides excellent holding power for heavy-duty packaging and shipping
  Strong seal on all box types, including hard-to-stick-to 100% recycled boxes
  Strong, durable solvent-free hot melt adhesive seals and protects
  Release coating makes unwind easy. Resists slivering, splitting and tearing',
  product_price:
  14.99,
  product_category:
  "Packaging",
  product_quantity:
  100,
  image_url:
  "product14ImageURL"
})
product15 = Product.create({
  product_name:
  '2022 Topps Baseball Series 2 Retail Display Box - 24 Packs Per Box',
  product_description:
  'Each Box contains 24 Packs
  Each Pack contains fifteen 2022 Topps Baseball Series 2 base cards
  Each Pack Also Contains 1 Exclusive insert card
  Each Retail Display Box has a TOTAL of 384 Cards',
  product_price:
  72.54,
  product_category:
  'Sports',
  product_quantity:
  100,
  image_url:
  "product15ImageURL"
})
product16 = Product.create({
  product_name:
  'Logitech MK270 Wireless Keyboard And Mouse Combo For Windows, 2.4 GHz Wireless, Compact Mouse, 8 Multimedia And Shortcut Keys, For PC, Laptop - Black',
  product_description:
  'Reliable Plug and Play: The USB receiver provides a reliable wireless connection up to 33 ft (1), so you can forget about drop-outs and delays and you can take it wherever you use your computer
  Type in Comfort: The design of this keyboard creates a comfortable typing experience thanks to the low-profile, quiet keys and standard layout with full-size F-keys, number pad, and arrow keys
  Durable and Resilient: This full-size wireless keyboard features a spill-resistant design (2), durable keys and sturdy tilt legs with adjustable height',
  product_price:
  24.99,
  product_category:
  'Computer',
  product_quantity:
  100,
  image_url:
  "product16ImageURL"
})
# product17 = Product.create({
#   product_name:
#   ,
#   product_description:
#   ,
#   product_price:
#   ,
#   product_category:
#   ,
#   product_quantity:
#   100,
#   image_url:
#   "product17ImageURL"
# })
# product18 = Product.create({
#   product_name:
#   ,
#   product_description:
#   ,
#   product_price:
#   ,
#   product_category:
#   ,
#   product_quantity:
#   100,
#   image_url:
#   "product18ImageURL"
# })
# product19 = Product.create({
#   product_name:
#   ,
#   product_description:
#   ,
#   product_price:
#   ,
#   product_category:
#   ,
#   product_quantity:
#   100,
#   image_url:
#   "product19ImageURL"
# })
# product20 = Product.create({
#   product_name:
#   ,
#   product_description:
#   ,
#   product_price:
#   ,
#   product_category:
#   ,
#   product_quantity:
#   100,
#   image_url:
#   "product20ImageURL"
# })
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