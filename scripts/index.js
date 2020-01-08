const pictureContainer = document.getElementById('picture-container')

document.addEventListener("DOMContentLoaded", function() {
  loadPix()
});

function loadPix() {
  BEETLES.forEach(p => {
    pictureContainer.innerHTML += imageDiv(p)
  })
}

function listenPictures() {
  
}