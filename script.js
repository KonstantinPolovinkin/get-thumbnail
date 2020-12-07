'use strict';

function getPartUrl() {
  const url = window.location.href;
  return (url.slice(url.indexOf('v=') + 1, url.indexOf('&')));
}

function buildUrl() {
  return (`https://img.youtube.com/vi/${getPartUrl()}/0.jpg`);
}

console.log(buildUrl());
window.open(buildUrl());
