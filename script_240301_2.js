let menu = 1

if(menu == 1){
  console.log("물건사기")
}else if(menu == 2){
  console.log("잔고확인")
}else if(menu == 3){
  console.log("히스토리 확인")
}else{
  console.log("홈으로 돌아가기")
}

switch(menu){
  case 1 : 
    console.log("물건사기")
    break;
  case 2:
    console.log("잔고확인")
    break;
  case 3:
    console.log("히스토리 확인")
  default:
    console.log("홈으로 돌아가기")
}