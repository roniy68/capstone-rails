require 'rails_helper'

RSpec.describe 'Users API', type: :request do
  describe 'GET /api/v1/users' do
    it 'fetches all users' do
      create(:user, username: 'user1')
      create(:user, username: 'user2')

      get '/api/v1/users'

      expect(response).to have_http_status(200)

      json_response = JSON.parse(response.body)
      usernames = json_response.map { |user| user['username'] }

      expect(usernames).to include('user1', 'user2')
    end
  end

  describe 'GET /api/v1/users/:id' do
    it 'retrieves a user' do
      user = create(:user)

      get "/api/v1/users/#{user.id}"

      expect(response).to have_http_status(200)

      json_response = JSON.parse(response.body)

      expect(json_response).to include('id' => user.id, 'username' => user.username)
    end
  end

  describe 'POST /api/v1/users' do
    it 'creates a new user' do
      user_params = {
        user: {
          username: 'newuser'
        }
      }

      post '/api/v1/users', params: user_params

      expect(response).to have_http_status(201)

      json_response = JSON.parse(response.body)

      expect(json_response['username']).to eq('newuser')
    end
  end

  describe 'PATCH /api/v1/users/:id' do
    it 'updates a user' do
      user = create(:user)

      user_params = {
        user: {
          username: 'updateduser'
        }
      }

      patch "/api/v1/users/#{user.id}", params: user_params

      expect(response).to have_http_status(200)

      json_response = JSON.parse(response.body)

      expect(json_response['username']).to eq('updateduser')
    end
  end

  describe 'DELETE /api/v1/users/:id' do
    it 'deletes a user' do
      user = create(:user)

      delete "/api/v1/users/#{user.id}"

      expect(response).to have_http_status(200)

      json_response = JSON.parse(response.body)

      expect(json_response).to include('message' => 'User deleted successfully')
    end
  end
end
