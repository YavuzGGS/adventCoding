import data from './input.json'

const inputData = data
        
export function Main(data) {
    let initialVal = 50
    let counter = 0
    let clickCounter = 0
    for(let row of data){
        //console.log(row)
        const direction = row[0]
        let number = Number(row.slice(1))
        if(number >= 100){
            clickCounter += Math.floor(number/100)
        }
        number = number %100
        //console.log(direction)
        if(direction == 'R'){
            initialVal = (initialVal + Number(number))
            if(initialVal >= 100){
                clickCounter++
            }
            initialVal = initialVal % 100
        }else if(direction == 'L'){
            initialVal = (initialVal - Number(number))
            if(initialVal<=0){
                clickCounter++
                initialVal += 100
            }
            initialVal = initialVal % 100
        }
        //console.log(clickCounter)
        if(initialVal == 0){
            counter++
        }
        
    }
    console.log(clickCounter)
    return clickCounter
}

Main(inputData)

