class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.integer :product_id, null: false
      t.integer :review_rating, null: false
      t.text :review_body, null: false
      t.timestamps
    end
  end
end
