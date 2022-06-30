class UpdateProducts < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :product_price
  end
end
