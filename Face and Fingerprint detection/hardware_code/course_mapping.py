# time // day// course_id



import time
import datetime

# Get current time
current_time = time.localtime()
current_date = datetime.datetime.now()

# Get the day of the week (Monday is 0, Sunday is 6)
day_of_week = current_date.weekday()


# Calculate minutes
minutes = current_time.tm_hour * 60 + current_time.tm_min
minutes=minutes//60
# print("Current time in minutes:", minutes)

rows = 8 # days
cols = 25 # hrs

vector = [[ -1 for _ in range(cols)] for _ in range(rows)]
print(vector)
def addcourse(day,hr,course_id):
    vector[day][hr]=course_id
