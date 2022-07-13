class Api::UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create(user_params)
    @user = User.new(user_params)
    # @user = User.new(
    #   params[:user][:name],
    #   params[:user][:email],
    #   params[:user][:password]
    # )

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid email/password combination"], status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
