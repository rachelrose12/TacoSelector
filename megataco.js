let tacos = document.querySelectorAll(".taco")
console.log(tacos)

tacos.forEach(taco => { ///instead of dealing with the entire group of tacos you deal with individual tacos
    //singular tacos just for part in parenthesis
   taco.addEventListener("click", e => {
       taco.classList.toggle('active')// each taco turns on and off when clicked on
   })
 
})


let theButton = document.querySelector(".button")
let resultDiv = document.querySelector("#result")
let counter = 0



theButton.addEventListener("click", e=> {
          counter = 0 //counting Tacos starts at zero every time pressed
   
    tacos.forEach(taco => {//singular tacos
       if (taco.classList.contains('active')) {
           counter += 1
       } 
    })
    resultDiv.innerHTML = `You selected ${counter} tacos!`
    resultDiv.classList.remove("hidden")
    // counter += 1
    // console.log(`you pressed the button this many times: ${counter}`)// prints the counter
    // resultDiv.innerHTML = `Button pressed ${counter} times!`
    // resultDiv.classList.remove('hidden')
})


