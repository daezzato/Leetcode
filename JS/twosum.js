//The function has two parameters: an array of integers and a target integer
//The function must return the indices of the two numbers that add up to the target. There is only one solution, The same element can't be used twice
//[1, 2, 3], 5 - [1, 2]
//Run a for loop and a nested for loop to compare each element with every subsequent element. Then check to see if the nums from the first for loop and the nums from the second for loop will equal the target when added together. If they do, return the indices in an array

function twoSum(nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j]
			}
		}
		
	}
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
console.log(twoSum([3, 2, 3], 6))