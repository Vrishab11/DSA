function palindrome(str){
    let flag =0
    for(let i=0;i<str.length; i++){
        if(str[i] != str[str.length-i-1])
            flag=1
            break
    }
    if(flag==1){
        return false
    }else{
        return true
    }
}

console.log(palindrome("racecar"))
console.log(palindrome("apple"))