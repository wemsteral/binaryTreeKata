A timed solution (60mins) to this exercise -

![ss](https://github.com/wemsteral/binaryTreeKata/blob/master/ss.png)

My approach:

1. Idea: create two new arrays, one with the indices of the left side of the tree, one with the indices of the right. How?
2. Ascertain the pattern from which the indices can be derived. In this case, starting from index 1 (0 not relevant as head of tree), one can gather the next 2 left hand indices by performing `(index*2)+1` and `(index*2)+2`, and then performing that on the two new values, which is the exponential pattern of the tree.
3. Create loop to perform this and push into two separate arrays as long as the index value doesn't exceed length of original array.
4. Use index lists to create total sums.
5. Compare total sums with another conditional statement and return final "Left" or "Right".
