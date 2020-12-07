'use strict';

function getPartUrl() {
  const url = window.location.href;
  if (!url.includes('list')) {
    return (url.slice(url.indexOf('=') + 1, url.indexOf('&')));
  } else {
    return (url.slice(url.lastIndexOf('=') + 1, url.length + 1));
  }
}

function buildUrl() {
  return (`https://img.youtube.com/vi/${getPartUrl()}/0.jpg`);
}

console.log(buildUrl());
window.open(buildUrl());
