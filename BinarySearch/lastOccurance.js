function lastOcc(arr, n){
    function search(arr,n,left,right){
        let result = -1
        let mid = Math.floor((left+right)/2)

        if(n === arr[mid]){
            result = mid
            left = mid+1
        }else if(n <arr[mid]){
            return search(arr,n,left,mid-1)
        }else{
            return search(arr,n,mid+1,right)
        }
        return result
    }
    return search(arr,n,0,arr.length-1)
}

console.log(lastOcc([1,1,2,3,3,4,4,5,6],1))
console.log(lastOcc([1,1,2,3,3,4,4,5,6],4))