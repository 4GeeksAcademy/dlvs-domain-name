/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];

  let domainText = "";
  pronoun.map(elementPronoun => {
    adj.map(elementAdj => {
      noun.map(elementNoun => {
        domainText += `
        <li>${elementPronoun}${elementAdj}${elementNoun}</li>
        `;
      });
    });
  });

  document.querySelector("#generatedList").innerHTML = domainText;
};
