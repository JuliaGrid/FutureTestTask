let about = document.querySelector('#about');
let service = document.querySelector('#service');
let aboutMore = document.querySelector('#aboutmore');
let serviceMore = document.querySelector('#servicemore');
let welcomeBook = document.querySelector('.welcome__book');
let book = document.querySelector('.book');
let bookClose = document.querySelector('.book__close');
let photosHidden = document.querySelector('#photos__hidden');
let photosMore = document.querySelector('.photos__more');
let radioButton1 = document.querySelector('#meeting__radio-button1');
let radioButton2 = document.querySelector('#meeting__radio-button2');
let radioButton3 = document.querySelector('#meeting__radio-button3');
let meetingList = document.querySelector('.meeting__list');
let buttonLeft = document.querySelector('.meeting__button-left');
let buttonRight = document.querySelector('.meeting__button-right');
let blackOverlay = document.querySelector('.black-overlay');
let photosessionVideo = document.querySelector('.photosession__video');
let photosessionVideoWrapper = document.querySelector('.photosession__video-wrapper');

aboutMore.onclick = function() {
    if (about.style.display === 'none') {
        about.style.display = 'block';
      } else {
        about.style.display = 'none';
      }
  };

serviceMore.onclick = function() {
    if (service.style.display === 'none') {
        service.style.display = 'block';
      } else {
        service.style.display = 'none';
      }
  };

photosMore.onclick = function() {
    if (photosHidden.style.display === 'none') {
        photosHidden.style.display = 'block';
      } else {
        photosHidden.style.display = 'none';
      }
  };

welcomeBook.onclick = function() {
    book.style.display = 'block';
    blackOverlay.style.display = 'block';
  }

bookClose.onclick = function () {
    book.style.display = 'none';
    blackOverlay.style.display = 'none';
}

function changeQustion() {
    if(radioButton1.checked) {
        meetingList.style.marginLeft = '0px';
    }
    if(radioButton2.checked) {
        meetingList.style.marginLeft = '-223px';
    }
    if(radioButton3.checked) {
        meetingList.style.marginLeft = '-445px';
    }
}

radioButton1.onclick = changeQustion;
radioButton2.onclick = changeQustion;
radioButton3.onclick = changeQustion;

photosessionVideo.onclick = function() {
    photosessionVideoWrapper.insertAdjacentHTML("beforeEnd", `<iframe class="photosession__video-youtube" src="https://www.youtube.com/embed/DXUAyRRkI6k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
}

