###
# Config
###

# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
page "index.html", layout: :main
page "routine.html", layout: :routine

# Activate directory indexes
activate :directory_indexes

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

###
# Proxies
###

# Daily routine pages
data.routines.each do |routine|
  proxy "/#{routine.day.parameterize}/index.html", "/routine.html", :locals => { :routine => routine }, :ignore => true
end

###
# Build Config
###

# Build-specific configuration
configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript
end
