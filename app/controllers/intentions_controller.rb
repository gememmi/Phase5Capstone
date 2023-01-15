class IntentionsController < ApplicationController

def index 
    render json: Intention.all
end

def show 
    intentions = @current_user.intentions
    render json: intentions
end

def create 
    newIntention = @current_user.intentions.create!(intention_params)
    render json: newIntention, status: :created
end

def update 
    intention = @current_user.intentions.find(params[:id])
    intention.update(intention_params)
    render json: intention, status: :updated
end

def destroy
    intention = @current_user.intentions.find(params[:id])
    intention.destroy
    head :no_content
end

private

def intention_params
    params.permit(:content)
end
    
end
