// ==UserScript==
// @name     	GoToExplainXKCD
// @version  	1.2
// @match			https://*.xkcd.com/*
// @grant    	none
// ==/UserScript==

// This script adds a button to xkcd comic pages, that leads to the unofficial wiki for the page
// Might break in the future, there's absolutely no warranty to this script

if (document.URL.includes("xkcd.com") && !document.URL.includes("explainxkcd")) {
  let current = [
      window.location.protocol,
      window.location.hostname,
      window.location.pathname
  ]

  if (current[1] !== "xkcd.com") {
    current[1] = current[1].slice(current[1].indexOf('.') + 1);
  }

  if  (isNumeric(current[2]) || !isNumeric(current[2]) && current[2] === "/") {
    let btn = document.createElement("div");
    btn.style.position = "fixed";
    btn.style.right = "20px";
    btn.style.bottom = "20px";
    btn.style.zIndex = "9999999999";

    let img = document.createElement("img");
    img.style.position = "relative";
    img.style.height = "48px";
    img.style.cursor = "pointer";
    img.src = browser.runtime.getURL("https://raw.githubusercontent.com/5ucur/go-to-explainxkcd/main/icons/explain.png");

    btn.appendChild(img);
    document.body.appendChild(btn);
    current.splice(1, 0, "//explain")

    btn.addEventListener("click", () => {
      window.open(current.join(""), '_blank').focus()
    })
  }

  function isNumeric(num){
      return !isNaN(num.slice(1,-1))
  }
}
