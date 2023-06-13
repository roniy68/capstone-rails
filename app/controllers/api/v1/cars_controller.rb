class Api::V1::CarsController < ApplicationController
  def index
    cars = Car.all.order(created_at: :desc)
    render json: cars
  end

  def create
  end

  def show
  end

  def destroy
  end
end
