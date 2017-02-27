Rails.application.routes.draw do
  resources :scores, only: [:index, :new, :create, :show]
  root 'scores#index'
end
