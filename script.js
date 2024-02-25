let hrs= document.querySelector("#hrs")
let mn= document.querySelector("#min")
let se= document.querySelector("#sec")

function actualise() {
    let time= new Date()
    hrs.innerHTML= time.getHours()
    mn.innerHTML= time.getMinutes()
    se.innerHTML= time.getSeconds()
}
setInterval(actualise,1000)