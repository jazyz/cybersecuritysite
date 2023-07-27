

function displayText(response) {
  let header = document.querySelector(".poll");
  if (response == "yes") {
    header.innerText = "89% of Canadians share your viewpoint. Privacy is becoming more and more important in the digital age.";
  } else {
    header.innerText = "11% of Canadians share your viewpoint. Hopefully this website can change your mind about the topic.";
  }
}
