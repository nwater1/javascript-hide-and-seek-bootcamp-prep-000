function getFirstSelector(selector) {
  var elements = document.querySelector(selector)
  return elements
}

function nestedTarget() {
  var target = document.querySelector('#nested div div div .target')
  return target
}

function increaseRankBy(n) {
  var lists = document.querySelectorAll('.ranked-list')
  for(var i = 0; i < lists.length; i++)
  
  for(var i = 0; i < list1.length; i++) {
    list1[i].innerHTML = parseInt(i + 1 + n)
  }
  
  for(var i = 0; i < list2.length; i++) {
    list2[i].innerHTML = parseInt(12 -i + n)
  }
  
}

function deepestChild() {
  var div = document.querySelector('div#grand-node div div div div')
  return div
}