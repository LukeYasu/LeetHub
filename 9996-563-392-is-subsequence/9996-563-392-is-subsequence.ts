function isSubsequence(s: string, t: string): boolean {
    let x = 0
    if(s === '') return true
    for(let i = 0; i < t.length; i++){
        if(s[x] === t[i]){
            x++
        }
        if(x === s.length) return true
    }
    return false
};