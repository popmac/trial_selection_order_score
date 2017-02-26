class ScoresController < ApplicationController

  def index
  end

  def new
    @score = Score.new
  end

  def create
    Score.create(score_params)
    redirect_to root_path
  end

  private
    def score_params
      params.require(:score).permit(symbol_array(2))
    end

    def symbol_array(integer)
      array = []
      integer.times do |i|
        array << "q#{i + 1}".to_sym
      end
      array
    end
end
