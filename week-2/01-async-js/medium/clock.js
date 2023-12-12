setInterval(() => {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    console.log(`${hour}:${minute}:${seconds}`);
  }, 1000);
  
  setInterval(() => {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let period = "";
    let _12HourClockFormat;
  
    if (hour > 12) {
      period = "pm";
      _12HourClockFormat = hour - 12;
    } else {
      period = "am";
      _12HourClockFormat = hour;
    }
    console.log(`${_12HourClockFormat}:${minute}:${seconds}:${period}`);
  }, 1000);
  