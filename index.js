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
  var list1 = list.children[0]
  var list2 = list.children[1]
  
  for(var i = 0; i < list1.length; i++) {
    
  }
}

function deepestChild() {
  var div = document.querySelector('div#grand-node div div div div')
  return div
}