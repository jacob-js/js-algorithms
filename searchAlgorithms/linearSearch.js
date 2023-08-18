export default function linearSearch(arr, t){
    for(const i in arr){
        if(t === arr[i]){
            return i
        }
    }

    return -1
};

// Big O - O(n)