'use strict';

function getPartUrl() {
  const url = window.location.href;
  if (!url.includes('m.youtube.com')) {
    return (url.slice(url.indexOf('v=') + 2, url.lastIndexOf('&')));
  } else {
    return (url.slice(url.indexOf('v=') + 2, url.length + 1));
  }

}

function buildUrl() {
  return (`https://img.youtube.com/vi/${getPartUrl()}/0.jpg`);
}

window.open(buildUrl());