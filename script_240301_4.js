1. 1부터 100까지 더하는 for문
let answer = 0
for (let i = 1; i < 100; i++) {
  answer = answer+i
}
console.log(answer)


2. 1부터 100까지 홀수만 출력

for(let i= 1;i<100; i+=2){
  console.log(i)
}

3. 1부터 550꺼자 369결과를 출력하자


for(let i=0;i<550;i++){
  let game = i.toString()
  let answer = ""
  for(j=0;j<game.length;j++){
    if(game[j] =="3" || game[j] =="6" || game[j] =="9"){
      answer = answer + "짝"
    }
  }  
  console.log(answer.length>0? answer:i)
}
4. 주어진 숫자가 소수이면 true, 아니면 false

let i = 
if(i%1==0){
  console.log("false")
}
else{
  console.log("true")
}