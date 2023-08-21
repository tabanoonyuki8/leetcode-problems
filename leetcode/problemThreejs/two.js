function arr(number,target){

for(var i=0; i<number.lenght;i++){
    for(var j=i+1; j<number.lenght;j++){
        if(number[i]+number[j]===target){
            return(i,j);
        }
    }
}


}
arr([2,7,11,15],9);