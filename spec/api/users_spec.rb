RSpec.describe Api::V1::UsersController, type: :request do
  describe 'GET /api/v1/users' do
    it 'returns a list of users' do
      users = [
        { 'id' => 1, 'username' => 'ahroniyA', 'created_at' => '2023-06-20T12:09:47.280Z', 'updated_at' => '2023-06-20T12:09:47.280Z' },
        { 'id' => 2, 'username' => 'salwaB', 'created_at' => '2023-06-20T12:09:47.287Z', 'updated_at' => '2023-06-20T12:09:47.287Z' },
        { 'id' => 3, 'username' => 'talhaM', 'created_at' => '2023-06-20T12:09:47.293Z', 'updated_at' => '2023-06-20T12:09:47.293Z' }
      ]

      users.each do |user_data|
        FactoryBot.create(:user, user_data)
      end

      get '/api/v1/users'

      expect(response).to have_http_status(:ok)

      response_body = JSON.parse(response.body)
      expect(response_body).to eq(users)
    end
  end

  describe 'GET /api/v1/users/:id' do
    it 'returns a user by id' do
      user = FactoryBot.create(:user)

      get "/api/v1/users/#{user.id}"

      expect(response).to have_http_status(:ok)

      response_body = JSON.parse(response.body)
      expect(response_body['id']).to eq(user.id)
    end
  end

  describe 'POST /api/v1/users' do
    it 'creates a new user' do
      user_params = {
        username: 'talhaM'

      }

      post '/api/v1/users', params: { user: user_params }

      expect(response).to have_http_status(:created)

      response_body = JSON.parse(response.body)
      expect(response_body['username']).to eq('talhaM')
    end
  end

  describe 'PATCH /api/v1/users/:id' do
    it 'updates a user' do
      user = FactoryBot.create(:user)

      updated_user_params = {
        username: 'NewUsername'

      }

      patch "/api/v1/users/#{user.id}", params: { user: updated_user_params }

      expect(response).to have_http_status(:ok)

      user.reload
      expect(user.username).to eq('NewUsername')
    end
  end

  describe 'DELETE /api/v1/users/:id' do
    it 'deletes a user' do
      user = FactoryBot.create(:user)

      delete "/api/v1/users/#{user.id}"

      expect(response).to have_http_status(:ok)

      expect(User.exists?(user.id)).to be_falsy
    end
  end
end
