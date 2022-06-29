Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :user, only: [:create, :show] do
      resources :cart_items, only: [:create, :show, :index, :update, :destroy]
    end
    resource :session, only: [:create, :show, :destroy]
    resources :products, only: [:create, :show, :index, :update, :destroy] do
      resources :reviews, only: [:create, :show, :index, :update, :destroy]
    end
  end
  
  root "static_pages#root"
end
