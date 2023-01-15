class UserMailer < ApplicationMailer
    default from: 'notifications@example.com'
    
    def welcome_email
        @url = 'http://e/login'
        mail(to: @current_user.email, subject: 'Welcome to BrainBright')
    end

end
