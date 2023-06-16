class Api::V1::ReservationsController < Api::V1::BaseController
  def index
    reservations = Reservation.all
    render json: reservations
  end

  def create
    reservation = Reservation.new(reservation_params)
    if reservation.save
      render json: reservation, status: :created
    else
      render json: { error: reservation.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    reservation = Reservation.find(params[:id])
    render json: reservation
  end

  def destroy
    reservation = Reservation.find(params[:id])
    reservation.destroy
    render json: { message: 'Reservation deleted successfully' }
  end

  private

  def reservation_params
    params.require(:reservation).permit(:car_name, :car_model, :start_date, :end_date, :car_id, :user_id)
  end
end
