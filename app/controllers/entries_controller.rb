class EntriesController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def index 
        render json: @current_user.entries.all
    end

    def show
        entries = @current_user.entries
        render json: entries
    end

    def create 
        user = @current_user
        mood_rating = MoodRating.create!(score: params[:score])
        # byebug;
        newEntry = Entry.create!(entry_params.merge(mood_rating_id: mood_rating.id))
        # newEntry = @current_user.entries.create!(entry_params.merge(mood_rating_id: mood_rating.id))
        # newEntry = @current_user.entries.create!(entry_params.merge(:user_id => user.id))
       
        render json:{ mood_rating: MoodRatingSerializer.new(mood_rating) , entry: EntrySerializer.new(newEntry) }, status: :created
    end

    def update
        entry = @current_user.entries.find(params[:id])
        entry.update(entry_params)
        entry.mood_rating.update(score: params[:score])
        render json:{ mood_rating: MoodRatingSerializer.new(entry.mood_rating), entry: EntrySerializer.new(entry) }
    end

    def destroy
        entry = @current_user.entries.find(params[:id])
        entry.destroy
        head :no_content
    end

    private

    def entry_params
        params.permit(:title, :content, :user_id, :mood_rating_id )
    end
end
