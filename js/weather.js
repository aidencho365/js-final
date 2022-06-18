const API_KEY = "03ebcb0fe230d33182f37ca5df9a4a39"

function onGeoSuccess(position) {
    const lat = position.coords.latitude; /*위도, 당연히 숫자임 ㅋㅋ */
    const lng = position.coords.longitude; /*경도, 당연히 숫자임 ㅋㅋ */
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&lang=kr&appid=${API_KEY}&units=metric`

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#w-city");
            const weather = document.querySelector("#w-weather");
            const temp = document.querySelector("#w-temp");

            city.innerText = `${data.name}`;
            weather.innerText = `${data.weather[0].main}`;
            temp.innerText = `${Math.round(data.main.temp)}˚`;
        });
}

function onGeoError() {
    alert("날씨 정보를 불러올 수 없네요 ㅜㅜ");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
