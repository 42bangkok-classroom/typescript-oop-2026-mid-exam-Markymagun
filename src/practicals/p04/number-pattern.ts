let Num1 = Number(process.argv[2]);


for (let i = 1; i <=Num1 ; i++) {
  let row = ""
 for (let j = 1; j <=Num1 ; j++) {
    if(j<=Num1-i){
        row+=" "
    }else{
        row+=(j-(Num1-i))
    }
}
console.log(row)
}

export{}