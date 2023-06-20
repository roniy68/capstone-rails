require 'rails_helper'

RSpec.describe 'Cars API', type: :request do
  describe 'GET /api/v1/cars' do
    it 'fetches all cars' do
      car1 = create(:car, name: 'Toyota', model: 'Corolla', user: create(:user, username: 'user1'))
      car2 = create(:car, name: 'Honda', model: 'Civic', user: create(:user, username: 'user2'))
      get '/api/v1/cars'
      expect(response).to have_http_status(200)
      json_response = JSON.parse(response.body)
      cars = json_response.map { |car| car.slice('id', 'name', 'model') }
      expect(cars).to include({ 'id' => car1.id, 'name' => 'Toyota', 'model' => 'Corolla' }, { 'id' => car2.id, 'name' => 'Honda', 'model' => 'Civic' })
    end
  end

  describe 'POST /api/v1/cars' do
    it 'returns a list of cars' do
      user = FactoryBot.create(:user, id: 1, username: 'Ali')

      FactoryBot.create(:car, id: 1, name: 'Mercedes', description: 'A luxury car with impressive performance.', photo: 'https://ik.imagekit.io/ahroniy/mercedies.jpg?updatedAt=1686688717606', price: 250.5, model: 'benz', user:, created_at: '2023-06-20T10:18:26.205Z', updated_at: '2023-06-20T10:18:26.205Z')
      get '/api/v1/cars'

      expect(response).to have_http_status(:ok)

      response_body = JSON.parse(response.body)

      expected_response = [
        { 'id' => 1, 'name' => 'Mercedes', 'description' => 'A luxury car with impressive performance.', 'photo' => 'https://ik.imagekit.io/ahroniy/mercedies.jpg?updatedAt=1686688717606', 'price' => '250.5', 'model' => 'benz', 'user_id' => 1, 'created_at' => '2023-06-20T10:18:26.205Z', 'updated_at' => '2023-06-20T10:18:26.205Z' }
      ]
      expect(response_body).to eq(expected_response)
    end
  end

  describe 'GET /api/v1/cars/:id' do
    it 'retrieves a car' do
      car = create(:car)

      get "/api/v1/cars/#{car.id}"

      expect(response).to have_http_status(200)

      json_response = JSON.parse(response.body)

      expect(json_response).to include('id' => car.id, 'name' => car.name, 'model' => car.model, 'description' => car.description, 'photo' => car.photo, 'user_id' => car.user_id)
    end
  end

  describe 'DELETE /api/v1/cars/:id' do
    it 'deletes a car' do
      car = create(:car)

      delete "/api/v1/cars/#{car.id}"

      expect(response).to have_http_status(200)

      json_response = JSON.parse(response.body)

      expect(json_response).to include('message' => 'Car Deleted Successfully')
    end
  end
end
