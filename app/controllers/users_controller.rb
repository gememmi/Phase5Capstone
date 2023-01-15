class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    
    def index
      render json: User.all 
    end
     
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id 
      render json: user, status: :created
      # ActionMailer
      # respond_to do |format|
      #   if @user.save
      #     # Tell the UserMailer to send a welcome email after save
      #     UserMailer.with(username: @current_user).welcome_email.deliver_later
  
      #     format.html { redirect_to(@current_user, notice: 'User was successfully created.') }
      #     format.json { render json: @current_user, status: :created, location: @current_user }
      #   else
      #     format.html { render action: 'new' }
      #     format.json { render json: @current_user.errors, status: :unprocessable_entity }
      #   end
      # end

    end 
    
    def show 
      render json: @current_user
    end
      
  
    private
  
    def user_params
      params.permit(:username, :password, :password_confirmation, :email, :phone_num, :avatar)
    end
end
