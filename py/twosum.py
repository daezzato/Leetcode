
#The function has two parameters: a list of integers and a target integer
#The function must return the indices of the two numbers that add up to the target. There is only one solution, The same element can't be used twice
#[1, 2, 3], 5 - [1, 2]
#Run a for loop and a nested for loop to compare each element with every subsequent element. In the nested for loop, put i + 1 to have the loop start from there all the way til the end of the length of the list. Then check to see if the nums from the first for loop and the nums from the second for loop will equal the target when added together. If they do, return the indices in an list

def twoSum(nums, target):
	for i in range(len(nums)):
		for j in range(i+1, len(nums)):
			if nums[i] + nums[j] == target:
				return [i, j]
			


print(twoSum([3, 2, 4], 6))
print(twoSum([2, 7, 11, 15], 9))
print(twoSum([3, 3], 6))
print(twoSum([3, 2, 3], 6))