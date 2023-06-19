class Api::V1::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]
    def create
      user = User.find_or_initialize_by(username: params[:username])
  
      if user.save
        render json: { message: 'Sign in successful' }
      else
        render json: { error: 'Failed to create session' }, status: :unprocessable_entity
      end
    end
  
    def destroy
      # Perform any necessary logic to handle session destruction
      # For example, you can clear the session or remove any relevant data
  
      render json: { message: 'Sign out successful' }
    end
  end
  