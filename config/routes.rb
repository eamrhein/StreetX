Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show, :create, :update, :destroy] do
      get "search", on: :collection
    end
    resources :product_listings, only: [:index, :show, :create, :update, :destroy]
    resources :follows, only: [:index, :show, :create, :update, :destroy]
  end

  root "static_pages#root"
end