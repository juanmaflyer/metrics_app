Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do
    namespace :v1 do
      root "metrics#index"
      get "/metrics", to: "metrics#index"
      get "/time_series", to: "time_series#index"
      get "/time_series/averages", to: "time_series#averages"
      post "/time_series", to: "time_series#create"
    end
  end
end
