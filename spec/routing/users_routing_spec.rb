require 'rails_helper'

RSpec.describe 'Users routing', type: :routing do
  describe 'GET /api/v1/users' do
    it 'routes to #index' do
      expect(get: '/api/v1/users').to route_to('api/v1/users#index')
    end
  end

  describe 'GET /api/v1/users/1' do
    it 'routes to #show' do
      expect(get: '/api/v1/users/1').to route_to('api/v1/users#show', id: '1')
    end
  end

  describe 'POST /api/v1/users' do
    it 'routes to #create' do
      expect(post: '/api/v1/users').to route_to('api/v1/users#create')
    end
  end

  describe 'PUT /api/v1/users/1' do
    it 'routes to #update via PUT' do
      expect(put: '/api/v1/users/1').to route_to('api/v1/users#update', id: '1')
    end
  end

  describe 'PATCH /api/v1/users/1' do
    it 'routes to #update via PATCH' do
      expect(patch: '/api/v1/users/1').to route_to('api/v1/users#update', id: '1')
    end
  end

  describe 'DELETE /api/v1/users/1' do
    it 'routes to #destroy' do
      expect(delete: '/api/v1/users/1').to route_to('api/v1/users#destroy', id: '1')
    end
  end
end
