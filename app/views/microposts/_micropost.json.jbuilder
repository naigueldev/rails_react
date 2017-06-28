json.extract! micropost, :id, :message, :email, :created_at, :updated_at
json.url micropost_url(micropost, format: :json)
