let count = Number(process.argv[2]);

if (Number.isNaN(count) || count <= 1) {
  process.exit();
}

for (let i = 1; i <= count; i++) 
  { let row =""
  for (let j = 1; j<= count - i ; j++) {
    row += "" ;
  }
  for(let j = 1;j<=count;j++) {
    let row=j;
    row+=row;
  }
  console.log(row);
}

export { };