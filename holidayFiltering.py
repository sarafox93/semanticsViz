import json
import sys
import re



filterKeywords = ['Christmas','CHRISTMAS','XMAS','Labor day','Labor Day','Yom Kippur','yom kippur','Columbus Day','columbus day','veterans day','Veterans Day','Thanksgiving','thanksgiving','Hanukkah','hanukkah','New Years','new years','New years','New Year','Chinese New Years','Valentines day','Valentines Day','Easter','easter','Cinco de Mayo','cinco de mayo','Mothers Day','mothers day','Fathers Day','fathers day','July 4th','4th of July','April Fools Day','April Fools','St. Patricks Day','St patties day']
filterKeyword = '25'
file_name = "flickr100k-photos.json"
file_write = "filteredData.json"
my_data = json.loads(open(file_name).read())
f = open(file_write,"w")


f.write('{ \n "members": [')
for line in open(file_name):
 for filters in filterKeywords:
  if filters in line:
   f.write(line)	
   print line

f.write("] \n }")


f.close()