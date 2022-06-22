Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :show, :destroy]
    resources :products, only: [:create, :show, :index, :update, :destory] do
      resources :reviews, only: [:create, :show, :index, :update, :destroy]
    end
  end
  
  root "static_pages#root"
end
