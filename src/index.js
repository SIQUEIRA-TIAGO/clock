const hour = document.getElementById('hour')
const min = document.getElementById('minutes')
const sec = document.getElementById('seconds')
const date = document.getElementById('date')

const zeroLeft = (value) => {
  if(value < 10){
    value = "0" + value;
    return value;
  } else {
    return value;
  }
}

setInterval(() => {
  let now = new Date();

  const nowHour = now.getHours();
  hour.value = zeroLeft(nowHour)

  const nowMin = now.getMinutes();
  min.value = zeroLeft(nowMin)

  const nowSec = now.getSeconds();
  sec.value = zeroLeft(nowSec)

  const nowDate = `${zeroLeft(now.getDate())} / ${zeroLeft(now.getMonth())} / ${now.getFullYear()}`
  date.value = nowDate
}, 1000)