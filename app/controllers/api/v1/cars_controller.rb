class Api::V1::CarsController < Api::V1::BaseController
  before_action :set_car, only: %i[show destroy]

  def index
    cars = Car.all.order(created_at: :desc)
    render json: cars
  end

  def create
    car = Car.create!(car_params)
    car.user = current_user
    if car
      render json: car
    else
      render json: car.errors
    end
  end

  def show
    render json: @car
  end

  def destroy
    @car&.destroy
    render json: { message: 'Car Deleted Successfully' }
  end

  private

  def car_params
    params.permit(:name, :model, :price, :description, :image, :user_id)
  end

  def set_car
    @car = Car.find(params[:id])
  end
end
