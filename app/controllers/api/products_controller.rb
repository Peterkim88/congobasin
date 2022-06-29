class Api::ProductsController < ApplicationController

  def create
    @product = Product.new(product_params)
    if @product.save
      render "api/product/show"
    else
      render json: @product.errors.full_messages, status: 402
    end
  end
  
  def show
    @product = Product.find(params[:id])
  end

  def index
    @products = Product.all
    render :index
  end

  private

  def product_params
    params.require(:product).permit(
      :product_name,
      :product_description,
      :product_price,
      :product_category,
      :product_quantity,
      :product_image
    )
  end

end
