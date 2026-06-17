import math
# Problem-1
# Linear search
# def func(arr, target):
#     for i in range(len(arr)):
#         if arr[i]==target:
#             return i
#     return -1

# print(func( [6, 8, 0, 3], 5))
# Time complexity = O(n) where n = arr.length
# Space complexity = O(1)

# Problem-2
# Binary search (For sorted array)
# def func(arr, target):
#     left = 0
#     right = len(arr)-1
#     while left<=right:
#         middle = math.floor((left+right)/2)
#         if arr[middle]==target:
#             return middle
#         elif arr[middle]>target:
#             right=middle-1
#         else:
#             left = middle+1
#     return -1

# print(func([-1, 0, 3, 5, 9, 12], 9))
# Time complexity = O(logn) where n = arr.length
# Space complexity = O(1)

# Problem 3:-
# Bubble Sort Algorithm
# def func(arr):
#     for i in range(len(arr)-1):
#         is_swapped = False
#         for j in range(len(arr)-1-i):
#             if arr[j]>arr[j+1]:
#                 temp = arr[j]
#                 arr[j] = arr[j+1]
#                 arr[j+1] = temp
#                 is_swapped = True
#         if not is_swapped:
#             break
#     return arr

# print(func([4, 5, 1, 3, 9]))
# Time complexity = O(n^2) where n = len(arr)
# Space complexity = O(1)

# Problem 4:-
# Selection Sort Algorithm 
# arr = [4, 5, 1, 3, 9]
# def func(arr):
#     n = len(arr)
#     for i in range(n-1):
#         min = i
#         for j in range(i+1, n):
#             if arr[min] > arr[j]:
#                 min = j
#         if min != i:
#             temp = arr[i]
#             arr[i] = arr[min]
#             arr[min] = temp
#     return arr

# print(func(arr))
# Time complexity = O(n^2) where n = len(arr)
# Space complexity = O(1)

# Problem 5:-
# Insertion Sort Algorithm 
arr = [4, 5, 1, 3, 9]
def func(arr):
    n = len(arr)
    for i in range(1, n):
        curr = arr[i]
        prev = i - 1
        while arr[prev]>curr and prev>=0:
            arr[prev+1] = arr[prev]
            prev = prev - 1
        arr[prev+1] = curr
    return arr

print(func(arr))
# Time complexity = O(n^2) where n = len(arr)
# Space complexity = O(1)