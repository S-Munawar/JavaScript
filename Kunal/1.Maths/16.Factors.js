
function Factors(n) {

    const res = []
    
    for(let i = 1; i * i <= n; i ++) {

        if(n % i === 0) {
            let factors = []
            let a = i
            b = n / a
            if(a === b) {
                factors.push
            }
            else {
                factors.push(a)
                factors.push(b)
            }
            res.push(factors)
        }

        
    }
    return res
    
}

console.log(Factors(6));