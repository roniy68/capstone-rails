class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end
  
  def create
    user = User.find_or_initialize_by(username: params[:username])
    if user.save
      render json: { message: 'Username saved successfully' }
    else
      render json: { error: 'Failed to save username' }, status: :unprocessable_entity
    end
  end
end
