export default function binarySearch(sortedArr, target){
    let leftIndex = 0;
    let rightIndex = sortedArr.length - 1;

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if(target === sortedArr[middleIndex]){
            return middleIndex
        }

        if(target < sortedArr[middleIndex]){
            rightIndex = middleIndex - 1
        }else{
            leftIndex = middleIndex + 1
        }
    }

    return -1
};

// Big-O - O(logn)