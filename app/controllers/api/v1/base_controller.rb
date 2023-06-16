class Api::V1::BaseController < ApplicationController
  skip_before_action :verify_authenticity_token
  # Some more Api Config
end
