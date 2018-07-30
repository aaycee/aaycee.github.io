# Akachukwu Obi
# Project Euler #1
# created July 10, 2018

#!/usr/bin/env python
# culled from http://code.jasonbhill.com/python/project-euler-problem-18/

"""
The sums traveling from top to bottom will be the same as the sums traveling from 
bottom to top. Start at the second to bottom row, and for each number  in that
row, do the following: Take the maximum of the numbers directly down and left or
down and right from , and add that to . Now do the same for the third-to-last row,
then fourth-to-last, and so on. We’re modifying the triangle as we go to produce
maximum partial sums from the bottom, and the last stage will be to replace to top
number in the triangle, which will then be the maximum sum.
"""

import time
 
# define a recursive function to create partial sums by row
def recSumAtRow(rowData, rowNum):
    # iterate over the given row
    for i in range(len(rowData[rowNum])):
        # add the largest of the values below-left or below-right
        rowData[rowNum][i] += max([rowData[rowNum+1][i],rowData[rowNum+1][i+1]])
    # base case
    if len(rowData[rowNum])==1: return rowData[rowNum][0]
    # recursive case
    else: return recSumAtRow(rowData, rowNum-1)
 
# read in the data
rows = []
with open('e18triangle.txt') as f:
    for line in f:
        rows.append([int(i) for i in line.rstrip('\n').split(" ")])
 
 
start = time.time()
result = recSumAtRow(rows, len(rows)-2) # start at second to last row
elapsed = time.time() - start
 
 
print "%s found in %s seconds" % (result ,elapsed)

# we could use this same method to solve e67


