class AddProductPrice < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :product_price, :integer, null: false
  end
end
