/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const pronoun = ["a", "my", "your", "his", "her"];
  const adj = ["small", "huge", "fast", "bright", "dark"];
  const noun = ["cat", "dog", "bird", "fish", "tiger"];
  const topLevelDomainName = [".com", ".biz", ".io", ".eu", ".gov"];

  const randomizer = array => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  let domainText = "";
  let counter = 0;
  let maxDomainNames = 5;

  while (counter < maxDomainNames) {
    const newPronoun = randomizer(pronoun);
    const newAdj = randomizer(adj);
    const newNoun = randomizer(noun);
    const newTopLevelDomainName = randomizer(topLevelDomainName);

    domainText += `<li>${newPronoun}${newAdj}${newNoun}${newTopLevelDomainName}</li>`;

    counter++;
  }

  document.querySelector("#generatedList").innerHTML = domainText;
};
