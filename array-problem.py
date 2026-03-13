# Problem Statement:
# Given a binary array nums, return the maximum number of consecutive 1’s in the array.
def required(arr):
    max_count = 0
    current_count = 0
    for num in arr:
        if num == 1:
            current_count = current_count + 1
        else:
            max_count = max(current_count, max_count)
            current_count = 0
    return max(current_count, max_count)

print(required([1,0,1,1,0,1]))