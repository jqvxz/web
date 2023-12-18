// Popup for terms and info

function openTermsPopup() {
  var termsPopup = document.getElementById('termsPopup');
  termsPopup.showModal();
  document.body.style.filter = 'blur(5px)';
  termsPopup.addEventListener('click', function (event) {
    if (event.target === termsPopup) {
      closeModal();
    }
  });
}

function closeModal() {
    var termsPopup = document.getElementById('termsPopup');
    termsPopup.close();
    document.body.style.filter = 'none';
}

// Popup for downloads

function openDownloadPopup() {
  var downloadPopup = document.getElementById('downloadPopup');
  downloadPopup.showModal();
  document.body.style.filter = 'blur(5px)';
  downloadPopup.addEventListener('click', function (event) {
      if (event.target === downloadPopup) {
          closeDownloadPopup();
      }
  });
}

function closeDownloadPopup() {
  var downloadPopup = document.getElementById('downloadPopup');
  downloadPopup.close();
  document.body.style.filter = 'none';
}

// Feature open google / leave site

function exitSite() {
  window.location.href = 'https://www.google.com';
}

// Feature open about.html (not used)

document.getElementById("aboutButton").addEventListener("click", function() {
  window.location.href = "about.html";
});
