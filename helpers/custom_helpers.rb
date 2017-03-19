module CustomHelpers
  # Fetch Exercise
  # Accepts exercise name as parameter and returns a hash containing exercise name and target
  def fetch_exercise name
    exercise = ""
    data.exercises.each do |exe|
      if exe.name === name
        exercise = exe
      end
    end
    exercise
  end
end
