'use strict';

function getPartUrl() {
  const url = window.location.href;
  if (!url.includes('m.youtube.com')) {
    return (url.slice(url.indexOf('v=') + 1, url.indexOf('&')));
  } else {
    return (url.slice(url.indexOf('v=') + 1, url.length + 1));
  }

}

function buildUrl() {
  return (`https://img.youtube.com/vi/${getPartUrl()}/0.jpg`);
}

console.log(buildUrl());
window.open(buildUrl());
