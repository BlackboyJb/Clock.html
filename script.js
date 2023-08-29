const hourEl = document.querySelector('.hour');
const minEl = document.querySelector('.minute');
const secEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const toggleEl = document.querySelector('.toggle')
const dateEl = document.querySelector('.date')


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];


toggleEl.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = "Dark Mode"
    } else {
        html.classList.add('dark')
        e.target.innerHTML = "Light Mode"
    }
})

function setTime() {
    const time = new Date();
    const date = time.getDate();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : 'AM'
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    minEl.style.transform = `translate(-50%, -100%) rotate(${scale(min, 0, 59, 0, 360)}deg)`
    secEl.style.transform = `translate(-50%, -100%) rotate(${scale(sec, 0, 59, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${min < 10 ? `0${min}` : min} ${ampm}`

    dateEl.innerHTML = `${days[day]} , ${months[month]} <span class ="circle">${date}</span>`
}


function prop() {
    const day = new Date().getDay()
    const dayName = days[day]
    if (dayName === "Monday") {
        dateEl.style.color = "#851e3e"
    } else if (dayName === "Tuesday") {
        dateEl.style.color = "#fed766"
    } else if (dayName === "Wednesday") {
        dateEl.style.color = "#ead5dc"
    } else if (dayName === "Thursday") {
        dateEl.style.color = "#005b96"
    } else if (dayName === "Friday") {
        dateEl.style.color = "#0e9aa7"
    } else if (dayName === "Saturday") {
        dateEl.style.color = "#63ace5"
    } else if (dayName === "Sunday") {
        dateEl.style.color = "#d0e1f9 "
    } else {
        dateEl.style.color = "null"
    }
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)


prop()