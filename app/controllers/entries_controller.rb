class EntriesController < ApplicationController
    skip_before_action :authorize, only: [:index] 

    def index 
        render json: Entry.all
    end

    def create 
        newEntry = Entry.create!(entry_params)
    end

    def update
        entry = Entry.find_by(id: params[:id])
        entry.update(entry_params)
        render json: entry, status: :updated
    end

    def destroy
        entry = Entry.find_by(id: params[:id])
        entry.destroy
        head :no_content
    end

    private

    def entry_params
        params.permit(:title, :content)
    end
end
