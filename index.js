/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const hour = time.split(":")[0]
  const hourInteger = parseInt(hour, 10)
  if (hourInteger < 12) {
    return "Good Morning"
  } else if (hourInteger <=17 && hourInteger >= 12) {
    return "Good Afternoon"
  } else if (hourInteger <= 24 && hourInteger > 17) {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById("greeting").innerText = message
}