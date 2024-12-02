function compression(str){
    let newStr = ''
    let count = 1
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i+1]){
            count++
        }else{
            newStr += str[i] + count
            count = 1
        }
    }
    return newStr
}

console.log(compression('aaabbbcccc'))