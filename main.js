//Stardew Quiz

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Values
  let q1 = document.getElementById("Q1").value.toLowerCase();
  let q2 = document.getElementById("Q2").value.toLowerCase();
  let q3 = document.getElementById("Q3").value.toLowerCase();
  let q4 = document.getElementById("Q4").value.toLowerCase();
  let numCorrect = 0;
  let numCorrectSpan = document.getElementById("score");

  //Question1
  if (q1 === "mayor lewis" || q1 === "lewis") {
    document.getElementById("Q1Answer").innerHTML = `Correct`;
    numCorrect++;
    numCorrectSpan.innerHTML = numCorrect;
  } else {
    document.getElementById("Q1Answer").innerHTML = ` Incorrect`;
  }
  //Question2
  if (q2 === "100") {
    document.getElementById("Q2Answer").innerHTML = `Correct`;
    numCorrect++;
    numCorrectSpan.innerHTML = numCorrect;
  } else {
    document.getElementById("Q2Answer").innerHTML = ` Incorrect`;
  }
  //Question3
  if (q3 === "regular mines" || q3 === "regular mine") {
    document.getElementById("Q3Answer").innerHTML = `Correct`;
    numCorrect++;
    numCorrectSpan.innerHTML = numCorrect;
  } else {
    document.getElementById("Q3Answer").innerHTML = ` Incorrect`;
  }
  //Question4
  if (q4 === "5") {
    document.getElementById("Q4Answer").innerHTML = `Correct`;
    numCorrect++;
    numCorrectSpan.innerHTML = numCorrect;
  } else {
    document.getElementById("Q4Answer").innerHTML = ` Incorrect`;
  }
  console.log(numCorrect);
  //Score
  if (numCorrect === 4) {
    document.getElementById(
      "score"
    ).innerHTML = `<span id="score"> 4/4 (100%)</span>`;
    document.getElementById(
      "response"
    ).innerHTML = `<h3><span id="response">Amazing job! :)</span></h3>`;
  } else if (numCorrect === 3) {
    document.getElementById(
      "score"
    ).innerHTML = `<span id="score"> 3/4 (75%)</span>`;
    document.getElementById(
      "response"
    ).innerHTML = `<h3><span id="response">Good job!</span></h3>`;
  } else if (numCorrect === 2) {
    document.getElementById(
      "score"
    ).innerHTML = `<span id="score"> 2/4 (50%)</span>`;
    document.getElementById(
      "response"
    ).innerHTML = `<h3><span id="response">You'll do better next time</span></h3>`;
  } else if (numCorrect === 1) {
    document.getElementById(
      "score"
    ).innerHTML = `<span id="score"> 1/4 (25%)</span>`;
    document.getElementById(
      "response"
    ).innerHTML = `<h3><span id="response">Theirs always next time</span></h3>`;
  } else {
    document.getElementById(
      "score"
    ).innerHTML = `<span id="score"> 0/4 (0%)</span>`;
    document.getElementById(
      "response"
    ).innerHTML = `<h3><span id="response">It's okay</span></h3>`;
  }
}
