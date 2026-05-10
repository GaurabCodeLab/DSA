# Problem: Print numbers from n to 1 using recursion.
# n = 12
# def func(num):
#     if num==0:
#         return
#     print(num)
#     num = num-1
#     func(num)

# func(n)
# Time complexity = O(n)
# Space complexity = O(n)

# Problem: Print numbers from 1 to n using recursion.
# n = 12
# def func(num):
#     if num==0:
#         return
#     print(n-num+1)
#     num = num - 1
#     func(num)

# func(n)
# Time complexity = O(n)
# Space complexity = O(n)

# Write a function sum(n) that calculates the sum of the first n natural numbers using recursion.
# n = 12
# def func(num):
#     if num==1:
#         return 1
#     return num+func(num-1)

# print(func(n))
# Time complexity = O(n)
# Space complexity = O(n)

# Write a recursive function fact(n) that returns the factorial of a number n
# n = 5
# def func(num):
#     if num==0 or num==1:
#         return 1
#     return num*func(num-1)

# print(func(n))
# Time complexity = O(n)
# Space complexity = O(n)

# Problem Statement:
# Write a function sum(n) that calculates the sum of all numbers in an array arr using recursion. It sums from index 0 to n.
# arr = [5, 2, 6, 1, 3]
# def func(n):
#     if n==0:
#         return arr[n]
#     return arr[n]+func(n-1)

# print(func(len(arr)-1))
# Time complexity = O(n)
# Space complexity = O(n)

# Problem Statement:
# Write a recursive function sum(n) that calculates the sum of all odd numbers in an array arr up to index n.
# arr = [5, 2, 6, 1, 3]
# def func(n):
#     if n==0:
#         if arr[n]%2==0:
#             return 0
#         else:
#             return arr[n]
#     if arr[n]%2==0:
#         return func(n-1)
#     else:
#         return arr[n]+func(n-1)

# print(func(len(arr)-1))
# Time complexity = O(n)
# Space complexity = O(n)

# Problem Statement:
# Write a recursive function isPowerOfTwo(n) that returns true if n is a power of 2, otherwise false.
# def func(n):
#     if n==1:
#         return True
#     if n<1 and n%2!=0:
#         return False
#     return func(n/2)

# print(func(18))
# Time complexity = O(logn)
# Space complexity = O(logn)

# Problem Statement:
# Write a recursive function to findout fobonacci series
# def func(n):
#     if n<=1:
#         return n
#     return func(n-1)+func(n-2)

# print(func(8))
# Time complexity = O(2^n)
# Space complexity = O(n)