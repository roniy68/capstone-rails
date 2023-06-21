require 'rails_helper'
RSpec.describe 'Api::V1::CarsController', type: :request do
  describe 'GET /api/v1/cars' do
    it 'returns a list of cars' do
      user = FactoryBot.create(:user, id: 1, username: 'Ali')
      FactoryBot.create(:car, id: 1, name: 'Mercedes', description: 'A luxury car with impressive performance.', photo: 'https://ik.imagekit.io/ahroniy/mercedes.jpg?updatedAt=1686688717606', price: 250.5, model: 'benz', user:, created_at: '2023-06-20T10:18:26.205Z', updated_at: '2023-06-20T10:18:26.205Z')
      get '/api/v1/cars'
      expect(response).to have_http_status(:ok)
      response_body = JSON.parse(response.body)
      expected_response = [
        { 'id' => 1, 'name' => 'Mercedes', 'description' => 'A luxury car with impressive performance.', 'photo' => 'https://ik.imagekit.io/ahroniy/mercedes.jpg?updatedAt=1686688717606', 'price' => '250.5', 'model' => 'benz', 'user_id' => 1, 'created_at' => '2023-06-20T10:18:26.205Z', 'updated_at' => '2023-06-20T10:18:26.205Z' }
      ]
      expect(response_body).to eq(expected_response)
    end
  end
  describe 'GET /api/v1/cars/:id' do
    it 'returns a single car' do
      user = FactoryBot.create(:user, id: 1, username: 'Ali')
      car = FactoryBot.create(:car, id: 1, name: 'Mercedes', description: 'A luxury car with impressive performance.', photo: 'https://ik.imagekit.io/ahroniy/mercedes.jpg?updatedAt=1686688717606', price: 250.5, model: 'benz', user:, created_at: '2023-06-20T10:18:26.205Z', updated_at: '2023-06-20T10:18:26.205Z')

      get "/api/v1/cars/#{car.id}"
      expect(response).to have_http_status(:ok)
      response_body = JSON.parse(response.body)
      expected_response = {
        'id' => 1, 'name' => 'Mercedes', 'description' => 'A luxury car with impressive performance.', 'photo' => 'https://ik.imagekit.io/ahroniy/mercedes.jpg?updatedAt=1686688717606', 'price' => '250.5', 'model' => 'benz', 'user_id' => 1, 'created_at' => '2023-06-20T10:18:26.205Z', 'updated_at' => '2023-06-20T10:18:26.205Z'
      }
      expect(response_body).to eq(expected_response)
    end
  end
  describe 'DELETE /api/v1/cars/:id' do
    it 'deletes a car' do
      user = FactoryBot.create(:user, id: 1, username: 'Ali')
      car = FactoryBot.create(:car, id: 1, name: 'Mercedes', description: 'A luxury car with impressive performance.',
                                    photo: 'https://ik.imagekit.io/ahroniy/mercedes.jpg?updatedAt=1686688717606',
                                    price: 250.5, model: 'benz', user:,
                                    created_at: '2023-06-20T10:18:26.205Z', updated_at: '2023-06-20T10:18:26.205Z')
      expect do
        delete "/api/v1/cars/#{car.id}"
      end.to change { Car.count }.by(-1)
      expect(response).to have_http_status(:ok)
    end
  end
  describe 'POST /api/v1/users/:user_id/cars' do
    it 'creates a new car' do
      user = FactoryBot.create(:user, id: 1, username: 'Ali')
      car_params = {
        car: { name: 'Honda Civic', description: 'Lorem ipsum dolor sit amet.', photo: 'http://example.com/honda.jpg', price: 5500.0, model: '2022', user_id: user.id }
      }
      post "/api/v1/users/#{user.id}/cars", params: car_params
      expect(response).to have_http_status(:created)
      response_body = JSON.parse(response.body)
      expect(response_body['name']).to eq('Honda Civic')
      expect(response_body['description']).to eq('Lorem ipsum dolor sit amet.')
      expect(response_body['photo']).to eq('http://example.com/honda.jpg')
      expect(response_body['price']).to eq('5500.0')
      expect(response_body['model']).to eq('2022')
      expect(response_body['user_id']).to eq(user.id)
    end
  end
end
