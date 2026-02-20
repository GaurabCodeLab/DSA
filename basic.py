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
for i in arr:
    if(i % 2 == 0):
        print(i)

    