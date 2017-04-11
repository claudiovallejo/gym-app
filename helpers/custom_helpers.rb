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
  # Fetch Exercises by Type
  # Accepts a string exercise target and returns a list of exercise names
  def fetch_type name
    exercises = []
    data.exercises.each do |exe|
      if exe.target === name
        exercises.push(exe.name)
      end
    end
    exercises
  end
end
