function getFirstSelector(selector) {
  var elements = document.querySelector(selector)
  return elements
}

function nestedTarget() {
  var target = document.querySelector('#nested div div div .target')
  return target
}

function increaseRankBy(n) {
  
}

function deepestChild() {
  var div = document.querySelector('div#grand-node div div div div')
  return div.innerHTML
}