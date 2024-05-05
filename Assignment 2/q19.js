function timeConvert(totalMinutes) {
    if (totalMinutes < 0) {
      throw new Error("Invalid input: Cannot convert negative minutes.");
    }
  
    const hours = Math.floor(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;
  
    const hoursString = hours === 1 ? "hour" : "hours";
    const minutesString = remainingMinutes === 1 ? "minute" : "minutes";
  
    return `${totalMinutes} minutes = ${hours} ${hoursString} and ${remainingMinutes} ${minutesString}.`;
  }
  try {
    console.log(timeConvert(200));
    console.log(timeConvert(60));
    console.log(timeConvert(10));
  } catch (error) {
    console.error(error.message);
  }