class HealthCheckController < ApplicationController
  def index
    render json: { ping: true, message: 'hello world'}
  end
end