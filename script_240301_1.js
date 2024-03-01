let skills = ["HTML", "CSS", "Javascript"]

if (skills.includes("Javascript") && skills.includes("React")){
  console.log("합격")
}else if(skills.includes("Javascript")||skills.includes("React")){
  console.log("예비")
}else{
  console.log("탈락")
}