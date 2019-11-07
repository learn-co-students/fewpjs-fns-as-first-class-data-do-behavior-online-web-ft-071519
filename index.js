/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const t = time.split(":");
  const hh = parseInt(t[0]);
  const mm = parseInt(t[1]);
  if (hh < 12) {
    return 'Good Morning'
  } else if (hh >= 17) {
    return 'Good Evening'
  } else {
    return 'Good Afternoon'
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greet) {
  let greeting = document.getElementById('greeting')
  greeting.innerText = greet


}