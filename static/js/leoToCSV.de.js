// Only works for logged-in users.
// If user is not on the correct page they are notified and redirected.
// Also only works on desktop for now.

var delay = 500
var domain = 'https://dict.leo.org/trainer/manageFolder.php'
var data = []

function cell(el) {
  return '"' + el.innerText.replace(/"/g,"'") + '"'
}

function addRows() {
  var rows = document.querySelectorAll('.tbl-f tr')
  data = data.concat(Array.prototype.map.call(Array.prototype.slice.call(rows, 1, rows.length-1), function(x) {
    return cell(x.children[1]) +',' + cell(x.children[2])
  }))
}

function toFirstPage() {
  var pages = document.querySelector('.pages').children
  if (pages[0].tagName === 'INPUT') {
    nextPage()
    return
  }
  pages[0].click()
  setTimeout(toFirstPage, delay)
}

function nextPage() {
  addRows()
  var pages = document.querySelector('.pages').children
  for (var p = 0; p < pages.length; p++) {
    if (pages[p].tagName === 'INPUT') {
      break
    }
  }
  if (!pages[p+1]) {
    download()
    return
  }
  pages[p+1].click()
  setTimeout(nextPage, delay)
}

function download() {
  var downloadLink = document.createElement('a')
  downloadLink.href = 'data:text/csv,' + encodeURI(data.join('\n'))
  var d = new Date()
  downloadLink.download = 'leo-' + d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() +'.csv'
  document.body.appendChild(downloadLink)
  downloadLink.click()
  document.body.removeChild(downloadLink)
}

if (window.location.href === domain && (!document.getElementById('usersNickName') || document.getElementById('usersNickName').innerText === '')) {
  alert('Du musst eingeloggt sein um Vokabeln zu exportieren.')
} else if (window.location.href !== domain) {
  alert('Du wirst auf die richtige Seite weitergeleitet. Bitte starte das Bookmarklet dort noch einmal.')
  window.location = domain
} else {
  toFirstPage()
}