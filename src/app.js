/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#generatedList").innerHTML = domainGenerator();

  function domainGenerator() {
    const pronoun = ["a", "my"];
    const adj = ["small", "huge"];
    const noun = ["cat", "dog"];
    const topLevelDomainName = [".com", ".biz"];
    let completeDomain = [];

    for (let x = 0; x < pronoun.length; x++) {
      for (let y = 0; y < adj.length; y++) {
        for (let z = 0; z < noun.length; z++) {
          for (let a = 0; a < topLevelDomainName.length; a++) {
            let domainName = `<li class="list-group-item">${pronoun[x]}${adj[y]}${noun[z]}${topLevelDomainName[a]}</li>`;
            completeDomain.push(domainName);
          }
        }
      }
    }
    return completeDomain.join("");
  }
};
