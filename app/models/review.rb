class Review < ApplicationRecord

  validates :author_id,
    :product_id,
    :review_rating,
    :review_body,
    presence: true

end
