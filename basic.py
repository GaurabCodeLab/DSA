import math

# Problem Statement:
# Write a Program that defines a function to calculate the sum of two integers and prints the result. Call this function by passing two integer values.
def sumFunc(a, b):
    sum = a + b
    print(sum)

# sumFunc(12, 15)

# Problem Statement:
# Write a function that takes an integer and returns its square. Call this function and prints the result. Square(x) is a function that computes the square of a number. It returns the result instead of printing it.
def square_func(x):
    square = x * x
    return square

result = square_func(11)
# print(result)

# Problem Statement:
# Write a program that accepts a number (age) and checks whether the person is eligible to vote. A person is eligible if their age is 18 or more.
def check_eligiblity(age):
    if age < 0:
        print("Invalid age")
    elif age > 18:
        print("Eligible to vote")
    else:
        print("Not Eligible to vote")

# check_eligiblity(12)

# Problem Statement:
# Write a function that accepts a number and checks whether it is Even or Odd
def is_even(num):
    if num % 2 == 0:
        print("Even Number")
    else:
        print("Odd Number")

# is_even(5)

# Problem Statement:
# Write a program to print all even numbers from an array.
arr = [10, 3, 5, 2, 7, 6, 9]
# for i in arr:
#     if(i % 2 == 0):
#         print(i)

# Problem Statement:
# Write a function that returns the number of negative numbers in an array
arr =  [2, -6, 4, -8, 1, -9]
def negative_num_array(arr):
    count = 0
    for i in arr:
        if i < 0:
            count = count + 1
    return count

result = negative_num_array(arr)
# print(result)

# Problem Statement:
# Write a function that returns the largest number in an array
arr = [2, -6, 4, 8, 10, -9]
def max_array(arr):
    max = arr[0]
    for num in arr:
        if num > max:
            max = num
    return max

result = max_array(arr)
# print(result)

# Problem Statement:
# Write a function that returns the smallest number in an array
arr = [2, -6, -40, 8, 10, -9]
def min_array(arr):
    min = float("inf")
    for num in arr:
        if num < min:
            min = num
    return min

result = min_array(arr)
# print(result)

# Problem Statement:
# Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1
arr = [2, -6, -40, 8, 10, -9]
def find_index(arr, x):
    index = -1
    for i, value in enumerate(arr):
        if value == x:
            index = i
    return index

result = find_index(arr, 10)
# print(result)

# Problem Statement:
# Write a function secondLargest(arr) that returns the second largest distinct number in an array
# arr = [0, 3, 5, 2, 7, 9]
# arr = [4, 4, 4, 4, 4]
# arr = [0, 3, 5, 5, 2, 7,7,7, 9, 9, 9]
# arr = [5]
arr =  [10, 20]
def second_largest_number(arr):
    if len(arr)<2:
        return "Array should have at least two numbers"
    first_largest = float("-inf")
    second_largest = float("-inf")
    for num in arr:
        if num > first_largest:
            second_largest = first_largest
            first_largest = num
        elif num > second_largest and num != first_largest:
            second_largest = num
    if second_largest == float("-inf"):
        return "No second largest found"
    return second_largest
    

# print(second_largest_number(arr))

# Pattern 1: Print nxn Star Square
# Print a square pattern of stars (*) of size n x n.
# Output
# * * * *
# * * * *
# * * * *
# * * * *

n = 4
# for i in range(n):
#     star = ""
#     for j in range(n):
#         star = star + "*"
#     print(star)


# Pattern 2: Right-Angled Star Triangle
# Print a right-angled triangle of stars with n rows.
# Output
# *
# * *
# * * *
# * * * *

# for i in range(n):
#     star = ""
#     for j in range(i +1):
#         star = star + "*"
#     print(star)


# Pattern 3: Print a Right-Angled Number Triangle
# Write a program that prints a right-angled triangle of numbers of heightn.
# Output
# 1
# 1 2
# 1 2 3
# 1 2 3 4

# for i in range(n):
#     star = ""
#     for j in range(i+1):
#         star = star + str(j+1)
#     print(star)


# Pattern 4: Print a Right-Angled Triangle of Repeated Numbers
# Write a program that prints a right-angled triangle where each row contains the same number repeated.
# Output
# 1
# 2 2
# 3 3 3
# 4 4 4 4

# for i in range(n):
#     star = ""
#     for j in range(i+1):
#         star = star + str(i+1)
#     print(star)


# Pattern 5: Print a Reverse Right-Angled Triangle of Increasing Numbers
# Write a program that prints a reverse right-angled triangle where each row starts from 1 and the number of elements decreases with each row.
# Output
# 1 2 3 4
# 1 2 3
# 1 2
# 1

# for i in range(n):
#     star = ""
#     for j in range(n-i):
#         star = star + str(j+1)
#     print(star)


# Pattern 6: Print a Right-Aligned Right-Angled Triangle of Stars
# Write a program that prints a right-aligned triangle of stars increasing row by row, with leading spaces for alignment.
# Output
#       *
#     * *
#   * * *
# * * * *

# for i in range(n):
#     star = ""
#     for j in range(n-i-1):
#         star = star + " "
#     for k in range(i+1):
#         star = star + "*"
#     print(star)


# Pattern 7: Print a Right-Angled Triangle of Alternating 1s and 0s
# Write a program that prints a triangle of alternating 1s and 0s starting with 1 on each row.
# Output
# 1
# 1 0
# 1 0 1
# 1 0 1 0

# for i in range(n):
#     star = ""
#     toggle = 1
#     for k in range(i+1):
#         star = star + str(toggle)
#         if toggle == 1:
#             toggle = 0
#         else:
#             toggle = 1
#     print(star)


# Pattern 8: Right-Angled Triangle of Alternating 1s and 0s (Global Toggle)
# Write a program to print a triangle of alternating 1s and 0s, but the toggle continues globally across rows.
# Output
# 1
# 0 1
# 0 1 0
# 1 0 1 0

# toggle = 1
# for i in range(n):
#     star = ""
#     for j in range(i +1):
#         star = star + str(toggle)
#         if toggle == 1:
#             toggle = 0
#         else:
#             toggle = 1
#     print(star)

# Problem Statement:-
# Write a function countDigits(n)that takes an integer n and returns how many digits it contains

def count_digits(n):
    count = 0
    if n==0:
        return 1
    n = math.fabs(n)
    while n>0:
        n = math.floor(n/10)
        count = count + 1
    return count

print(count_digits(0))
        