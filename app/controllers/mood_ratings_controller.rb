class MoodRatingsController < ApplicationController
    skip_before_action :authorize, only: [:create,:show]

    def index
        moods = @current_user.mood_ratings.all
        render json: moods
    end

    def show
        mood = MoodRating.find(id: params[:id])
        render json: mood
    
    end

    def create
    #    newMood = @current_user.mood_ratings.create!(mood_rating_params)
    newMood = MoodRating.create!(mood_rating_params)
    render json: newMood, status: :created
    end

    def update 
        mood = MoodRating.find(id: params[:id])
        mood.update(mood_rating_params)
        render json: mood, status: :updated

    end

    def destroy
        mood = MoodRating.find(id: params[:id])
        mood.destroy
        head :no_content
    end

    private

    def mood_rating_params
        params.permit(:score)
    end
end
