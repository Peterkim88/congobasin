class Api::UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create(user_params)
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 402
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
