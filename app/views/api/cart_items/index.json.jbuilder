@items.each do |item|
  json.set! item.id do
    json.partial! "api/cart_items/item", item: item
  end
end