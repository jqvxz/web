// Ban opera gx users
  var isOperaGX = navigator.userAgent.includes("OPR") && navigator.userAgent.includes("Opera GX");
  if (isOperaGX) {
    window.location.href = "opera.html";
  }
