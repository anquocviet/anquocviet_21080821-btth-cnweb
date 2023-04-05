const $ = document.querySelector.bind(document);
const btnStart = $('.start');
const btnPause = $('.pause');
const hour = $('.hour')
const minute = $('.minute')
const second = $('.second')

let countSecond = parseInt(second.textContent);
let countMinute = parseInt(minute.textContent);
let countHour = parseInt(hour.textContent);
let id = 0;

btnStart.onclick = () => {
    id = setInterval(() => {
        countSecond++;
        if (countSecond >= 60) {
            countMinute++;
            if (countMinute >= 60) {
                countHour++;
                hour.textContent = String(countHour).padStart(2, '0');
                countMinute = 0;
            }
            minute.textContent = String(countMinute).padStart(2, '0');
            countSecond = 0;
        }
        second.textContent = String(countSecond).padStart(2, '0');
    }, 1000)
}

btnPause.onclick = () => {
    clearInterval(id)
}