function updateTime() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0'); 
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    console.log(formattedTime);
  }
  updateTime();
  const intervalId = setInterval(updateTime, 1000);
  function stopClock() {
    clearInterval(intervalId);
    console.log("Clock stopped.");
  }