class KindsController < ApplicationController

  def index
    kinds = Kinds.select(:id, :name)
    render json: kinds
  end
end