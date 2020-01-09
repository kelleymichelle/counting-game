const pictureContainer = document.getElementById('picture-container')
const count = 0

document.addEventListener("DOMContentLoaded", function() {
  loadPix()
  
});

function loadPix() {
  BEETLES.forEach(p => {
    pictureContainer.innerHTML += imageDiv(p)
  })
  listenPictures()
}

function listenPictures() {
  const bugs = [...document.getElementsByClassName('image-tile')]
  bugs.forEach(b => {
    b.addEventListener('click', (e) => {
      console.log(e.target.parentNode)
      console.log(e.target.outerHTML)
      toggleShake(b)
  })
  })
}

const toggleShake = (bug) => {
  bug.classList.toggle('shake-slow')
  bug.classList.toggle('trans')
}

function countBugs() {
  
}