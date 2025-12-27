import data from "./input.json";


const inputData = data.ids.split(",").map(d => 
  {
    const arr = d.split("-")
    return {
      start: arr[0],
      end: arr[1]
    }
  }
);

//console.log(inputData)

function processData(){
  let invalidNums = 0
  for (let {start, end} of inputData){
    for (let index = Number(start); index <= Number(end); index++) {
      //if(!hasEvenDigits(index)) continue
      let midPoint = (index.toString().length)/2
      let firstNum = index.toString().slice(0,midPoint)
      let secondNum = index.toString().slice(midPoint)
      //console.log("Number: "+index+" First num:"+firstNum +" Second num:" +secondNum)
      if(firstNum === secondNum) invalidNums += index
    }
    
  }
  console.log(invalidNums)
}

function hasEvenDigits(num: number){
  if(num.toString.length%2 == 0) return true
  return false
}
processData()