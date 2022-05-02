class Product < ApplicationRecord

  validates :product_name, 
    :product_description,
    :product_price,
    :product_category,
    :product_quantity,
    presence: true
  
end
