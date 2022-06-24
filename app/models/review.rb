class Review < ApplicationRecord

  validates :author_id,
    :author_name,
    :product_id,
    :review_rating,
    :review_body,
    presence: true

end
