let firstName = prompt("Adınız:")
let firstNameDOM = document.querySelector('#myName')
firstNameDOM.innerHTML = firstName


function showTime(){
    let days = ["pazartesi", "salı", "çarşamba","perşembe", "cuma", "cumartesi", "pazar"]
    let d =  new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    let day = days[d.getDay()]
    let myClock = document.querySelector('#myClock')
    myClock.innerHTML = `${h}:${m}:${s} ${day}`
}
setInterval(showTime); 