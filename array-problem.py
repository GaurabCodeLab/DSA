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
def required(arr):
    x = 0
    for i in range(1,len(arr)):
        if arr[i]>arr[x]:
            x = x + 1
            arr[x] = arr[i]
    for i in range(x+1, len(arr)):
        arr[i] = "_"
    print(arr)
    return x + 1

print(required( [0,0,1,1,1,2,2,3,3,4]))
            