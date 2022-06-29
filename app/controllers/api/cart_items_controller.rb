class Api::CartItemsController < ApplicationController

  def create
    @item = CartItem.new(item_params)
    if @item.save
      render :show
    else
      render json: @item.errors.full_messages, status: 404
    end
  end

  def show
    @item = CartItem.find(params[:user_id])
    render :show
  end

  def index
    # @items = CartItem.all.select{ |item| item.user_id == params[:user_id] }
    @items = CartItem.where(user_id: params[:user_id])
    render :index
  end

  def update
    @item = CartItem.find(params[:id])
    if @item.update(item_params)
      render :show
    else
      render json: @item.errors.full_messages, status: 404
    end
  end

  def destroy
    @item = CartItem.find(params[:id])
    if @item.delete
      render :show
    else
      render json: @item.errors.full_messages, status: 404
    end
  end

  private

  def item_params
    params.require(:cart_item).permit(
      :user_id,
      :product_id,
      :quantity
    )
  end

end
