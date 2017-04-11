###
# Config
###

# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
page "list.html", layout: :main
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
data.routines.each do |id, week|
  # This Week -> index.html
  if week.title === "This Week"
    proxy "/index.html", "/list.html", :locals => { :week => week }, :ignore => true
  # Is not This Week -> #{title.parameterize}.html
  else
    proxy "/#{week.title.parameterize}/index.html", "/list.html", :locals => { :week => week }, :ignore => true
  end
  week.routines.each do |routine|
    proxy "/#{week.title.parameterize}/#{routine.day.parameterize}/index.html", "/routine.html", :locals => { :week => week, :routine => routine }, :ignore => true
  end
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
