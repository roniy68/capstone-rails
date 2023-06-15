class UsersController < ApplicationController
    def create
      user = User.find_or_initialize_by(username: params[:username])
      if user.save
        render json: { message: 'Username saved successfully' }
      else
        render json: { error: 'Failed to save username' }, status: :unprocessable_entity
      end
    end
  end