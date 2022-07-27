const date = document.querySelector('.weather--date');
const place = document.querySelector('.weather--title');
const temp = document.querySelector('.weather--temp');
const weather = document.querySelector('.weather--type');
const weatherIcon = document.querySelector('.img--icon');
const now = new Date();

const displayDate = () => {
    date.textContent = now.toDateString();
};

displayDate();

const userAction = async forecast => {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=hackney&APPID=056694be82fea3c9e32e9f7081d74c2e&units=metric');
    const myJson = await response.json();
    const grabWeather = myJson.weather[0];
    const grabTemp = Math.round(myJson.main.temp);
	
    console.log(myJson.weather);
    
    place.innerHTML = `${myJson.name}, UK`;
    temp.innerHTML = `${grabTemp}`;
    weather.innerHTML = grabWeather.main;
    
   if(grabWeather.main === 'Rain'){
       weatherIcon.setAttribute('src', 'img/rain-icon.svg');
       weatherIcon.setAttribute('alt', 'Rain cloud icon');
   } else if (grabWeather.main === 'Sunny'){
       weatherIcon.setAttribute('src', 'img/sun-icon.svg');
       weatherIcon.setAttribute('alt', 'Sun icon');
   } else if (grabWeather.main === 'Clouds'){
       weatherIcon.setAttribute('src', 'img/cloud-icon.svg');
       weatherIcon.setAttribute('alt', 'cloud icon');
   } else {
       weatherIcon.setAttribute('src', 'img/cloud-sun-icon.svg');
       weatherIcon.setAttribute('alt', 'cloud with sun icon');
   }
    
  };

  userAction();