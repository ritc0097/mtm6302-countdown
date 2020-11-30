const $year = document.getElementById('year')
const $month = document.getElementById('month')
const $day = document.getElementById('day')


const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

let years = []
for (let i = 2020; i <= 2030; i++){
    years.push(`<option>${i}</option>`)
}
$year.innerHTML = years.join('')


let months = []
for (let i = 1; i <= 12; i++){
    months.push(`<option>${i}</option>`)
}
$month.innerHTML = months.join('')

$month.addEventListener('change', function() {
    let days = []
    for (let i = 1; i <= daysInMonth[$month.value -1]; i++) {
        days.push(`<option>${i}</option>`)
    }
    $day.innerHTML = days.join('')
})

// -------------------------- countdown

//const $container = document.getElementById('container')

let targetDate = {
    hours: 23,
    minutes: 59,
    seconds: 59,
}

setInterval(function () {

    targetDate.seconds -= 1
    
    $container.innerHTML = `

    ${targetDate.hours} hours
    ${targetDate.minutes} minutes
    ${targetDate.seconds} seconds
    
    `

}, 1000)

// ------------------------local storage

let date = new Date()

let targetDateToStore = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate()
}

localStorage.setItem('targetDate', JSON.stringify(targetDateToStore))

console.log(JSON.parse(localStorage.getItem('targetDate')))

// --------------------------- date difference and ms conversions

const $container = document.getElementById('container')

let now = new Date()
let futureDate = new Date(2020, 11, 10, 0, 0, 0)

console.log('current date', now.getTime())
console.log('future date', futureDate.getTime())

let difference = futureDate.getTime() - now.getTime()

console.log(difference)

function toDays(ms) {
    return Math.floor(ms / 1000 / 60 / 60 / 24)
}

function toHours(ms) {

    let days = Math.floor(ms / 1000 / 60 / 60 / 24)
    let hours = Math.floor(ms / 1000 / 60 / 60)

    let remainingHours = hours - (days * 24)

    return remainingHours
}

function toMinutes(ms){
    let hours = Math.floor(ms / 1000 / 60 / 60)
    let minutes = Math.floor(ms / 1000 / 60)

    let remainingMinutes = minutes - (hours * 60)

    return remainingMinutes
}

function toSeconds(ms){
    let minutes = Math.floor(ms / 1000 / 60)
    let seconds = Math.floor(ms / 1000)

    let remainingSeconds = seconds - (minutes * 60)

    return remainingSeconds
}

setInterval(function (){

    difference -= 1000 
    
    $container.innerHTML = `

    ${toDays(difference)} days

    ${toHours(difference)} hours

    ${toMinutes(difference)} minutes

    ${toSeconds(difference)} seconds
    `

}, 1000)