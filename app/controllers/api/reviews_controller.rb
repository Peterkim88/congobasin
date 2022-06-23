class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 404
    end
  end

  def show
    @review = Review.find(params[:id])
  end

  def index
    @reviews = Review.all
    render :index
  end

  def destroy
    @review = Review.find(params[:id])
    if @review.delete
      render :show
    else
      render json: @review.errors.full_messages, status: 404
    end
  end

  private

  def review_params
    params.require(:review).permit(
      :author_id,
      :author_name,
      :product_id,
      :review_rating,
      :review_body
    )
  end
end
