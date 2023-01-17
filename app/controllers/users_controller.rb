class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    
    def index
      render json: User.all 
    end
     
    def create
      @user = User.create!(user_params)
      session[:user_id] = @user.id
      if @user.save
        UserMailer.welcome_email(@user).deliver_now
      end
      render json: @user, status: :created
   

    end 
    
    def show 
      render json: @current_user
    end
      
  
    private
  
    def user_params
      params.permit(:username, :password, :password_confirmation, :email, :phone_num, :avatar)
    end
end
