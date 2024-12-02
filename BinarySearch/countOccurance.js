function countOcc(arr,n){
    let count = 0
    function search(arr,n,left,right){
        if(left > right){
            return -1
        }
       let mid = Math.floor((left + right) / 2)
       if(arr[mid] === n){
        count++
        search(arr,n,left,mid-1)
        search(arr,n,mid+1,right)
       }else if(n < arr[mid]){
        search(arr,n,left,mid-1)
       }else if(n > arr[mid]){
        search(arr,n,mid+1,right)
       }
    }
    search(arr,n,0,arr.length-1)
    return count
}

console.log(countOcc([1,1,2,3,3,3,4,4,5,6],6))
console.log(countOcc([1,1,2,3,3,3,4,4,5,6],3))