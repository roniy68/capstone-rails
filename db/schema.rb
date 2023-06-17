# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 20_230_613_202_858) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'cars', force: :cascade do |t|
    t.string 'name'
    t.text 'description'
    t.string 'photo'
    t.decimal 'price'
    t.text 'model'
    t.bigint 'user_id', null: false
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['user_id'], name: 'index_cars_on_user_id'
  end

  create_table 'reservations', force: :cascade do |t|
    t.string 'car_name'
    t.string 'car_model'
    t.date 'start_date'
    t.date 'end_date'
    t.bigint 'user_id', null: false
    t.bigint 'car_id', null: false
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['car_id'], name: 'index_reservations_on_car_id'
    t.index ['user_id'], name: 'index_reservations_on_user_id'
  end

  create_table 'users', force: :cascade do |t|
    t.string 'username'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  add_foreign_key 'cars', 'users'
  add_foreign_key 'reservations', 'cars'
  add_foreign_key 'reservations', 'users'
end
