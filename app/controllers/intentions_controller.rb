class IntentionsController < ApplicationController
skip_before_action :authorize, only: [:index]

def index 
    render json: Intention.all
end

def create 
    newIntention = Intention.create!(intention_params)
    render json: newIntention, status: :created
end

def update 
    intention = Intention.find_by(id: params[:id])
    intention.update(intention_params)
    render json: intention, status: :updated
end

def destroy
    intention = Intention.find_by(id: params[:id])
    intention.destroy
    head :no_content
end

private

def intention_params
    params.permit(:content)
end
    
end
