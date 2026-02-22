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
print(result)