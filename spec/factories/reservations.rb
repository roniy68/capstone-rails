FactoryBot.define do
  factory :reservation do
    car_name { 'Car 1' }
    car_model { 'Model 1' }
    start_date { Date.today + 1 }
    end_date { Date.today + 7 }
    association :user
    association :car
  end
end
