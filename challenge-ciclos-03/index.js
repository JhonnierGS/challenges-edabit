function filterArray(arr){
	nums = [];
	for (let i = 0; i < arr.length; i++)
		{
			if ( Number.isInteger(arr[i]) )
				{
					nums.push(arr[i])
				}
		}
	return nums;
}

filterArray(["b", "c", "w", 2, 3, 4]);
