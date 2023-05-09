function getTimezone() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const apiKey = "32bcd4a6e4b548968e7afcdb682ac679";
        const url = `https://api.ipgeolocation.io/timezone?apiKey=${apiKey}&lat=${lat}&long=${long}`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            const timezone = data.timezone;
            const dateTime = data.date_time_txt;
            alert(`Временная зона: ${timezone}\nМестное дата и время: ${dateTime}`);
          })
          .catch((error) => {
            console.error(error);
          });
      });
    } else {
      alert("Geolocation не поддерживается данным браузером");
    }
  }
  