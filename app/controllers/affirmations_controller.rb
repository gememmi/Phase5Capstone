class AffirmationsController < ActionController::API
    include ActionController::Cookies

    def affirmations
        response = HTTP.get("https://www.affirmations.dev/")
        render json: response.to_s

    end
end