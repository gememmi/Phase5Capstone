class UserMailer < ApplicationMailer
    default from: 'notifications@example.com'
    
    def welcome_email(user)
        @url = 'http://localhost:4000/signup'
        # @current_user = User.find_by(id: session[:user_id])
        @user = user
        mail(to: @user.email, subject: 'Welcome to StarBright')
    end

end
