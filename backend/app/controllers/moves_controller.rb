class MovesController < ApplicationController
  JSON_ATTRIBUTES = %i[name kind_id power mp].freeze

  def index
    kinds = Kind.select(:id, :name)
    moves = Move.eager_load(:kind)
    render json: { kinds: kinds }
  end

  def create
    move = Move.create!(move_params)
    render json: {move: move.as_json(expect: JSON_ATTRIBUTES)}, status: :created
  end

  def update
  end

  private

  def move_params
    params.require(:move).permit(:name, :kind_id, :power, :mp)
  end

end