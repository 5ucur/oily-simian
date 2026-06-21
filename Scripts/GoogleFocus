// ==UserScript==
// @name     GoogleFocus
// @version  1
// @match    *://*.google.com/*
// @match    *://google.com/*
// @grant    none
// ==/UserScript==

// The "press / to focus the search bar" thing seems to have broken.
// This script reimplements it.

function focus(event) {
  if (event.key === "/") {
    event.preventDefault()
    a[0].focus()
    setTimeout(function(){ a[0].selectionStart = a[0].selectionEnd = 10000; }, 0);
  }
};
  
var a = document.getElementsByTagName("textarea")
if (a.length)
	document.addEventListener("keydown", focus)
