// DIGITAL CLOCK PROJECT
// Using setInterval(), Date(), Arrays, and innerHTML

function updateClock() {
  // 1 Create a new Date object
  const now = new Date();

  // 2 Extract hours, minutes, seconds, date, month, and year
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const date = now.getDate();
  const month = now.getMonth(); // 0-11
  const year = now.getFullYear();

  // 3 Array for day and month names
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  const dayName = days[now.getDay()];
  const monthName = months[month];

  // 4 Convert 24-hour to 12-hour format
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  // 5 Add leading zeros
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // 6 Update HTML using innerHTML
  document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById("day").innerHTML = dayName;
  document.getElementById("date").innerHTML = `${date} ${monthName}, ${year}`;

  // 7 Clean console output for interactivity
  console.clear();
  console.log(`Time: ${hours}:${minutes}:${seconds} ${ampm}`);
  console.log(`Day: ${dayName}`);
  console.log(`Date: ${date} ${monthName}, ${year}`);
}

// 8 Update the clock every 1 second
setInterval(updateClock, 1000);

// 9 Run immediately on page load
updateClock();
