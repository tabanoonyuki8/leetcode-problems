
const fun= function(){
     function f(a,b){
        const sum=a+b;
        return sum;
    }
    return f;
}(2,3)
f=fun();
console.log(f(2,3));