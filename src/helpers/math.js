export const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const formatDate = (date) => {
  let d = new Date(date).toLocaleString('uk-UA', { timeZone: "Europe/Kiev" });
  d = new Date(d);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  let year = d.getFullYear();
  let hours = d.getHours();
  let minutes = '' + d.getMinutes();
  let seconds = '' + d.getSeconds();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;
  if (minutes.length < 2)
    minutes = '0' + minutes;
  if (seconds.length < 2)
    seconds = '0' + seconds;

  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}

export const numberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}