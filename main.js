//Magic 8 Ball Simulator

// Magic 8 Ball Button Event Listener
document.getElementById("search-btn").addEventListener("click", BtnClicked);

function BtnClicked() {
  // Get & Test the Question
  let question = document.getElementById("search-in").value.toLowerCase();
  if (question === `does a magic 8 ball actually work?`) {
    document.getElementById(
      "magic-8-ball"
    ).innerHTML = `<h3>Answer: How Dare you Doubt Me!<h3/>`;
  } else if (question === `is javascript awesome?`) {
    document.getElementById(
      "magic-8-ball"
    ).innerHTML = `<h3>Answer: Of Course!<h3/>`;
  } else if (question === "") {
    document.getElementById("magic-8-ball").innerHTML =
      "<h3>Answer: Please Enter A Question.</h3>";
  } else {
    // Random Response
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.2) {
      document.getElementById(
        "magic-8-ball"
      ).innerHTML = `<h3>Answer: Without a Doubt.<h3/>`;
    } else if (randNum < 0.4) {
      document.getElementById(
        "magic-8-ball"
      ).innerHTML = `<h3>Answer: As I see it, yes.<h3/>`;
    } else if (randNum < 0.6) {
      document.getElementById(
        "magic-8-ball"
      ).innerHTML = `<h3>Answer: Concentrate and Ask Again<h3/>`;
    } else if (randNum < 0.8) {
      document.getElementById(
        "magic-8-ball"
      ).innerHTML = `<h3>Answer: Don't Count On It.<h3/>`;
    } else {
      document.getElementById(
        "magic-8-ball"
      ).innerHTML = `<h3>Answer: Outlook Not So Good.<h3/>`;
    }
  }
}
