/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}
function greet(timeString) {
  hours = timeString.split(":")[0];
  if (hours < 12) {
    return "Good Morning"
  } else if (hours > 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
  // If the time is earlier than 12pm, return "Good Morning".
  // If the time is between 12pm and 5pm, return "Good Afternoon".
  // If the time is later than 5pm, return "Good Evening".
  debugger
}
function displayMessage(greeting) {
  document.getElementById("greeting").innerHTML = greeting

}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
