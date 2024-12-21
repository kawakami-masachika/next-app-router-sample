class MonstersController < ApplicationController
  def index
    monsters = Monster.limit(20).order(created_at: "DESC")
    render json: { monsters: monsters }
  end

  def create
    monster = Monster.new(monster_params)
    monster.save!
    render json: @controller.to_json, status: :ok
  end

  def update
    monster = Monster.find(params[:id])
    monster.update!(monster_params)
    render status: :ok
  end

  private

  def monster_params
    params.require(:monster).permit(:name, :type, :level, :attribute)
  end

end