class Api::V1::CarsController < Api::V1::BaseController
  before_action :set_car, only: %i[show destroy]

  def index
    cars = Car.all.order(created_at: :desc)
    render json: cars
  end

  def create
    user = User.find(params[:user_id])
    car = user.cars.build(car_params)
    if car.save
      render json: car, status: :created
    else
      render json: { error: car.errors.full_messages }, status: :unprocessable_entity
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
    params.require(:car).permit(:name, :model, :price, :description, :photo, :user_id)
  end

  def set_car
    @car = Car.find(params[:id])
  end
end
