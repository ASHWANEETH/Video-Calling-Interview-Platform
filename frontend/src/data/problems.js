export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: [
        "You must do this by modifying the input array in-place with O(1) extra memory.",
      ],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: [
        "Given a string s, return true if it is a palindrome, or false otherwise.",
      ],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 2 * 10⁵",
      "s consists only of printable ASCII characters",
    ],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },
  // ================= EASY =================

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an integer array nums, return true if any value appears at least twice.",
      notes: ["Return false if every element is distinct."],
    },
    examples: [
      { input: "nums = [1,2,3,1]", output: "true" },
      { input: "nums = [1,2,3,4]", output: "false" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {}`,
      python: `def containsDuplicate(nums): pass`,
      java: `class Solution { public boolean containsDuplicate(int[] nums) { return false; } }`,
    },
    expectedOutput: { javascript: "true", python: "True", java: "true" },
  },

  "merge-two-sorted-lists": {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Linked List",
    description: {
      text: "Merge two sorted linked lists and return it as a sorted list.",
      notes: [],
    },
    examples: [{ input: "l1=[1,2,4], l2=[1,3,4]", output: "[1,1,2,3,4,4]" }],
    constraints: ["0 ≤ list size ≤ 50"],
    starterCode: {
      javascript: `function mergeTwoLists(l1,l2){}`,
      python: `def mergeTwoLists(l1,l2): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4]",
      python: "[1,1,2,3,4,4]",
      java: "[1,1,2,3,4,4]",
    },
  },

  "best-time-buy-sell-stock": {
    id: "best-time-buy-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Greedy",
    description: {
      text: "Find the maximum profit from buying and selling a stock once.",
      notes: [],
    },
    examples: [{ input: "prices=[7,1,5,3,6,4]", output: "5" }],
    constraints: ["1 ≤ prices.length ≤ 10⁵"],
    starterCode: {
      javascript: `function maxProfit(prices){}`,
      python: `def maxProfit(prices): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: { javascript: "5", python: "5", java: "5" },
  },

  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "String • Hash Table",
    description: {
      text: "Return true if t is an anagram of s.",
      notes: [],
    },
    examples: [{ input: 's="anagram", t="nagaram"', output: "true" }],
    constraints: ["1 ≤ s.length ≤ 5 * 10⁴"],
    starterCode: {
      javascript: `function isAnagram(s,t){}`,
      python: `def isAnagram(s,t): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: { javascript: "true", python: "True", java: "true" },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming",
    description: {
      text: "You can climb 1 or 2 steps. Find total ways to reach n steps.",
      notes: [],
    },
    examples: [{ input: "n=3", output: "3" }],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n){}`,
      python: `def climbStairs(n): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: { javascript: "3", python: "3", java: "3" },
  },

  // ================= STRING =================

  "longest-common-prefix": {
    id: "longest-common-prefix",
    title: "Longest Common Prefix",
    difficulty: "Easy",
    category: "String",
    description: {
      text: "Find the longest common prefix among strings.",
      notes: [],
    },
    examples: [{ input: '["flower","flow","flight"]', output: '"fl"' }],
    constraints: ["1 ≤ strs.length ≤ 200"],
    starterCode: {
      javascript: `function longestCommonPrefix(strs){}`,
      python: `def longestCommonPrefix(strs): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: { javascript: "fl", python: "fl", java: "fl" },
  },

  "length-of-last-word": {
    id: "length-of-last-word",
    title: "Length of Last Word",
    difficulty: "Easy",
    category: "String",
    description: {
      text: "Return length of the last word in a string.",
      notes: [],
    },
    examples: [{ input: '"Hello World"', output: "5" }],
    constraints: ["1 ≤ s.length ≤ 10⁴"],
    starterCode: {
      javascript: `function lengthOfLastWord(s){}`,
      python: `def lengthOfLastWord(s): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: { javascript: "5", python: "5", java: "5" },
  },

  // ================= MEDIUM =================

  "3sum": {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "Find all unique triplets that sum to zero.",
      notes: [],
    },
    examples: [
      { input: "nums=[-1,0,1,2,-1,-4]", output: "[[-1,-1,1],[-1,0,1]]" },
    ],
    constraints: ["3 ≤ nums.length ≤ 3000"],
    starterCode: {
      javascript: `function threeSum(nums){}`,
      python: `def threeSum(nums): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: {
      javascript: "[[-1,-1,1],[-1,0,1]]",
      python: "[[-1,-1,1],[-1,0,1]]",
      java: "[[-1,-1,1],[-1,0,1]]",
    },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix Sum",
    description: {
      text: "Return array where each element is product of others.",
      notes: ["Solve without division."],
    },
    examples: [{ input: "nums=[1,2,3,4]", output: "[24,12,8,6]" }],
    constraints: ["2 ≤ nums.length ≤ 10⁵"],
    starterCode: {
      javascript: `function productExceptSelf(nums){}`,
      python: `def productExceptSelf(nums): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]",
      python: "[24,12,8,6]",
      java: "[24,12,8,6]",
    },
  },

  "find-minimum-rotated-array": {
    id: "find-minimum-rotated-array",
    title: "Find Minimum in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Binary Search",
    description: {
      text: "Find minimum element in rotated sorted array.",
      notes: [],
    },
    examples: [{ input: "nums=[3,4,5,1,2]", output: "1" }],
    constraints: ["1 ≤ nums.length ≤ 5000"],
    starterCode: {
      javascript: `function findMin(nums){}`,
      python: `def findMin(nums): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: { javascript: "1", python: "1", java: "1" },
  },

  "search-in-rotated-array": {
    id: "search-in-rotated-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Binary Search",
    description: {
      text: "Search target in rotated sorted array.",
      notes: [],
    },
    examples: [{ input: "nums=[4,5,6,7,0,1,2], target=0", output: "4" }],
    constraints: ["1 ≤ nums.length ≤ 5000"],
    starterCode: {
      javascript: `function search(nums,target){}`,
      python: `def search(nums,target): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: { javascript: "4", python: "4", java: "4" },
  },

  "longest-substring-without-repeating": {
    id: "longest-substring-without-repeating",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "Sliding Window",
    description: {
      text: "Find length of longest substring without repeating characters.",
      notes: [],
    },
    examples: [{ input: '"abcabcbb"', output: "3" }],
    constraints: ["0 ≤ s.length ≤ 5 * 10⁴"],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s){}`,
      python: `def lengthOfLongestSubstring(s): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: { javascript: "3", python: "3", java: "3" },
  },

  "set-matrix-zeroes": {
    id: "set-matrix-zeroes",
    title: "Set Matrix Zeroes",
    difficulty: "Medium",
    category: "Matrix",
    description: {
      text: "Set row and column to zero if element is zero.",
      notes: [],
    },
    examples: [
      {
        input: "[[1,1,1],[1,0,1],[1,1,1]]",
        output: "[[1,0,1],[0,0,0],[1,0,1]]",
      },
    ],
    constraints: ["m,n ≤ 200"],
    starterCode: {
      javascript: `function setZeroes(matrix){}`,
      python: `def setZeroes(matrix): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: {
      javascript: "matrix updated",
      python: "matrix updated",
      java: "matrix updated",
    },
  },

  "rotate-image": {
    id: "rotate-image",
    title: "Rotate Image",
    difficulty: "Medium",
    category: "Matrix",
    description: {
      text: "Rotate n×n matrix 90 degrees clockwise in-place.",
      notes: [],
    },
    examples: [{ input: "[[1,2],[3,4]]", output: "[[3,1],[4,2]]" }],
    constraints: ["1 ≤ n ≤ 20"],
    starterCode: {
      javascript: `function rotate(matrix){}`,
      python: `def rotate(matrix): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: {
      javascript: "matrix rotated",
      python: "matrix rotated",
      java: "matrix rotated",
    },
  },

  "coin-change": {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    category: "Dynamic Programming",
    description: {
      text: "Return minimum coins to make amount.",
      notes: [],
    },
    examples: [{ input: "coins=[1,2,5], amount=11", output: "3" }],
    constraints: ["1 ≤ amount ≤ 10⁴"],
    starterCode: {
      javascript: `function coinChange(coins,amount){}`,
      python: `def coinChange(coins,amount): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: { javascript: "3", python: "3", java: "3" },
  },

  "word-break": {
    id: "word-break",
    title: "Word Break",
    difficulty: "Medium",
    category: "Dynamic Programming",
    description: {
      text: "Check if string can be segmented using dictionary words.",
      notes: [],
    },
    examples: [{ input: 's="leetcode", dict=["leet","code"]', output: "true" }],
    constraints: ["1 ≤ s.length ≤ 300"],
    starterCode: {
      javascript: `function wordBreak(s,wordDict){}`,
      python: `def wordBreak(s,wordDict): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: { javascript: "true", python: "True", java: "true" },
  },

  "number-of-islands": {
    id: "number-of-islands",
    title: "Number of Islands",
    difficulty: "Medium",
    category: "Graph • DFS",
    description: {
      text: "Count number of islands in grid.",
      notes: [],
    },
    examples: [{ input: "grid with islands", output: "1" }],
    constraints: ["m,n ≤ 300"],
    starterCode: {
      javascript: `function numIslands(grid){}`,
      python: `def numIslands(grid): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: { javascript: "1", python: "1", java: "1" },
  },

  "course-schedule": {
    id: "course-schedule",
    title: "Course Schedule",
    difficulty: "Medium",
    category: "Graph • Topological Sort",
    description: {
      text: "Check if you can finish all courses.",
      notes: [],
    },
    examples: [
      { input: "numCourses=2, prerequisites=[[1,0]]", output: "true" },
    ],
    constraints: ["1 ≤ numCourses ≤ 2000"],
    starterCode: {
      javascript: `function canFinish(numCourses,prerequisites){}`,
      python: `def canFinish(numCourses,prerequisites): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: { javascript: "true", python: "True", java: "true" },
  },

  "top-k-frequent-elements": {
    id: "top-k-frequent-elements",
    title: "Top K Frequent Elements",
    difficulty: "Medium",
    category: "Heap • Hash Table",
    description: {
      text: "Return k most frequent elements.",
      notes: [],
    },
    examples: [{ input: "nums=[1,1,1,2,2,3], k=2", output: "[1,2]" }],
    constraints: ["1 ≤ nums.length ≤ 10⁵"],
    starterCode: {
      javascript: `function topKFrequent(nums,k){}`,
      python: `def topKFrequent(nums,k): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: { javascript: "[1,2]", python: "[1,2]", java: "[1,2]" },
  },

  "decode-ways": {
    id: "decode-ways",
    title: "Decode Ways",
    difficulty: "Medium",
    category: "Dynamic Programming",
    description: {
      text: "Return number of ways to decode digit string.",
      notes: [],
    },
    examples: [{ input: '"12"', output: "2" }],
    constraints: ["1 ≤ s.length ≤ 100"],
    starterCode: {
      javascript: `function numDecodings(s){}`,
      python: `def numDecodings(s): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: { javascript: "2", python: "2", java: "2" },
  },

  "daily-temperatures": {
    id: "daily-temperatures",
    title: "Daily Temperatures",
    difficulty: "Medium",
    category: "Stack",
    description: {
      text: "Return days to wait for warmer temperature.",
      notes: [],
    },
    examples: [
      { input: "[73,74,75,71,69,72,76,73]", output: "[1,1,4,2,1,1,0,0]" },
    ],
    constraints: ["1 ≤ temperatures.length ≤ 10⁵"],
    starterCode: {
      javascript: `function dailyTemperatures(t){}`,
      python: `def dailyTemperatures(t): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: {
      javascript: "[1,1,4,2,1,1,0,0]",
      python: "[1,1,4,2,1,1,0,0]",
      java: "[1,1,4,2,1,1,0,0]",
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};
