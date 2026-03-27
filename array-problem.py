import math
# Problem Statement:
# Given a binary array nums, return the maximum number of consecutive 1’s in the array.
# def required(arr):
#     max_count = 0
#     current_count = 0
#     for num in arr:
#         if num == 1:
#             current_count = current_count + 1
#         else:
#             max_count = max(current_count, max_count)
#             current_count = 0
#     return max(current_count, max_count)

# print(required([1,0,1,1,0,1]))

# Problem Statement:
# Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
# First Method:-

# def required1(arr):
#     arr.sort()
#     if arr[0] != 0:
#         return 0
#     for i in range(1, len(arr)):
#         if arr[i] != arr[i-1]+1:
#             return arr[i-1]+1
#     return len(arr)

# print(required1([9,6,4,2,3,5,7,0,1]))

# Second Method:-
# def required2(arr):
#     arraySum = sum(arr)
#     n = len(arr)
#     requiredSum = (n*(n+1))/2
#     return int(requiredSum - arraySum)

# print(required2([9,6,4,2,3,5,7,0,1]))

# Problem Statement:
# Given an integer array nums, move all 0’s to the end of it while maintaining the relative order of the non-zero elements.
# def required(arr):
#     x = 0
#     for i in range(len(arr)):
#         if arr[i] != 0:
#             arr[x] = arr[i]
#             x = x + 1
#     for i in range(x, len(arr)):
#         arr[i] = 0
#     return arr

# print(required([0]))

# Problem Statement:
# Given an integer array nums and an integer val, remove all occurrences of val in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
# def required(arr, val):
#     x = 0
#     for i in range(len(arr)):
#         if arr[i] != val:
#             arr[x] = arr[i]
#             x = x + 1
#     for i in range(x, len(arr)):
#         arr[i] = "_"
#     print(arr)
#     return x

# print(required([0,1,2,2,3,0,4,2], 2))

# Problem Statement:
# Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1)extra memory.
# def required(arr):
#     n = math.floor(len(arr)/2)
#     for i in range(n):
#         x_copy = arr[i]
#         arr[i] = arr[len(arr)-1-i]
#         arr[len(arr)-1-i] = x_copy
#     return arr

# print(required(["H","a","n","n","a","h"]))

# Problem Statement:
# Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
# def required(arr):
#     x = 0
#     for i in range(1,len(arr)):
#         if arr[i]>arr[x]:
#             x = x + 1
#             arr[x] = arr[i]
#     for i in range(x+1, len(arr)):
#         arr[i] = "_"
#     print(arr)
#     return x + 1

# print(required( [0,0,1,1,1,2,2,3,3,4]))

# Problem Statement:
# You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
# First Method - Brute Force Approach:-
# def required(arr):
#     max_profit = 0
#     for i in range(len(arr)):
#         for j in range(i+1, len(arr)):
#             if (arr[j]-arr[i])>max_profit:
#                 max_profit = arr[j] - arr[i]
#     return max_profit

# print(required([7,6,4,3,1]))

# second approach:-
# def required(arr):
#     max_profit = 0
#     buy_price = arr[0]
#     for i in range(len(arr)):
#         if buy_price>arr[i]:
#             buy_price = arr[i]
#         if (arr[i]-buy_price)>max_profit:
#             max_profit = arr[i] - buy_price
#     return max_profit

# print(required([7,6,4,3,1]))

# Problem Statement:
# You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
# Mergenums1 and nums2 into a single array sorted in non-decreasing order.
# First Method: Brute Force Approach:-
# def required(arr1, m, arr2, n):
#     for i in range(m,len(arr1)):
#         arr1[i] = arr2[i - m]
#     arr1.sort()
#     return arr1

# print(required([0], 0, [1], 1))

# Second Method:-
# def required(arr1, m, arr2, n):
#     arr1Copy = arr1[0:m]
#     p1 = 0
#     p2 = 0
#     for i in range(len(arr1)):
#         if p2>=n or (p1<m and arr1Copy[p1]<arr2[p2]):
#             arr1[i] = arr1Copy[p1]
#             p1+=1
#         else:
#             arr1[i] = arr2[p2]
#             p2+=1
#     return arr1

# print(required([0], 0, [1], 1))

# Third Method:-
def required(arr1, m, arr2, n):
    p1 = m - 1
    p2 = n - 1
    for i in range(len(arr1)-1, -1, -1):
        if p2 < 0:
            break
        if p1>=0 and arr1[p1]>arr2[p2]:
            arr1[i] = arr1[p1]
            p1 -= 1
        else:
            arr1[i] = arr2[p2]
            p2 -= 1
    return arr1
print(required([0], 0, [1], 1))