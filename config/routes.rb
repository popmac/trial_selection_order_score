Rails.application.routes.draw do
  resources :scores, only: [:index, :new, :create]
  root 'scores#index'
end
