function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      document.getElementById("info").innerHTML = "Геолокация не поддерживается вашим браузером.";
    }
  }
  
  function showPosition(position) {
    var infoDiv = document.getElementById("info");
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    infoDiv.innerHTML = "Ширина экрана: " + screenWidth + "<br>" +
                        "Высота экрана: " + screenHeight + "<br>" +
                        "Широта: " + latitude + "<br>" +
                        "Долгота: " + longitude;
  }
  
  function showError(error) {
    var infoDiv = document.getElementById("info");
    switch(error.code) {
      case error.PERMISSION_DENIED:
        infoDiv.innerHTML = "Информация о местоположении недоступна.";
        break;
      case error.POSITION_UNAVAILABLE:
        infoDiv.innerHTML = "Информация о местоположении недоступна.";
        break;
      case error.TIMEOUT:
        infoDiv.innerHTML = "Информация о местоположении недоступна.";
        break;
      case error.UNKNOWN_ERROR:
        infoDiv.innerHTML = "Информация о местоположении недоступна.";
        break;
    }
  }
  