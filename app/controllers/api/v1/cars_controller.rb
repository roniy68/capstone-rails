class Api::V1::CarsController < Api::V1::BaseController
  # include ActiveStorage::SetCurrent
  # include Rails.application.routes.url_helpers

  before_action :set_car, only: %i[show destroy]

  def index
    cars = Car.all.order(created_at: :desc)

    # image_url = rails_blob_path(cars.image, disposition: "attachment", only_path: true)
    
    # This works to add image blob but not url
    render json: cars.as_json(include: :image)
    
    # doesnot work
    # render json: cars.map{ |car|
    #  car.as_json.merge({ image: url_for(car.image)})
    # }

    # render json: cars.as_json(include: :image).map do |car|
    #   ActiveStorage::Current.set(host: "http://localhost:3000") do
    #     car.merge(image: car.image.url)
    #   end
    # end

    # render json: cars.as_json(include: :image).map do |car|
    #   car.as_json.merge(image: "hello")
    # end
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
    render json: @car.as_json(include: :image).merge(url_for(image))
  end

  def destroy
    @car&.destroy
    render json: { message: 'Car Deleted Successfully' }
  end

  private

  def car_params
    params.permit(:name, :model, :price, :description, :photo, :user_id,  :image)
  end

  def set_car
    @car = Car.find(params[:id])
  end
end
