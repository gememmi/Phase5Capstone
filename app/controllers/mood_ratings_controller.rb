class MoodRatingsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        render json: MoodRating.all 
    end

    def update 
        mood = MoodRating.find_by(id: params[:id])
        mood.update(mood_rating_params)
        render json: mood, status: :updated

    end

    def destroy
        mood = MoodRating.find_by(id: params[:id])
        mood.destroy
        head :no_content
    end

    private

    def mood_rating_params
        params.permit(:score)
    end
end
