

let celsiusInput= document.querySelector('#celsius >  input')
let fahrenheitInput= document.querySelector('#fahrenheit > input')
let kelvinInput= document.querySelector('#kelvin > input')
let btn1=document.querySelector('.btn button')

 function roundNum(number){
    return Math.round(number*100)/100
 }
//  celsius to other temp

celsiusInput.addEventListener('input',function(){
    let ctemp=parseFloat(celsiusInput.value)
    let ftemp=(ctemp*(9/5))+32
    let ktemp=ctemp+273.15
    fahrenheitInput.value=roundNum(ftemp)
    kelvinInput.value=roundNum(ktemp)

})
//  fahrenhiet to other temp
fahrenheitInput.addEventListener('input',function(){
    let ftemp=parseFloat(fahrenheitInput.value)
    let ctemp=(ftemp-32)*(5/9)
    let ktemp=ctemp+273.15
    celsiusInput.value=roundNum(ctemp)
    kelvinInput.value=roundNum(ktemp)

})
//  kelvin to other temp
kelvinInput.addEventListener('input',function(){
    let ktemp=parseFloat(kelvinInput.value)
    let ctemp=ktemp-273.15
    let ftemp=ctemp*(9/5)+32
    celsiusInput.value=roundNum(ctemp)
    fahrenheitInput.value=roundNum(ftemp)

})
btn1.addEventListener('click',function(){
celsiusInput.value=""
fahrenheitInput.value=""
kelvinInput.value=""
 })