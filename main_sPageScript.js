let local = JSON.parse(localStorage.getItem("loginObject"));

let user = document.getElementById("user");
let bYear = document.getElementById("bYear");
let place = document.getElementById("place");
let age = document.getElementById("age");

console.log(local);
console.log(place);

user.innerHTML = local.user;
// place.innerHTML = local.location;

birthYear = local.bdate.slice(0, 4);
bYear.innerHTML = birthYear;

const currentYear = new Date().getFullYear();
let cAge = currentYear - local.bdate.slice(0, 4);
age.innerHTML = cAge;

let animation = document.getElementById("animation");

let url =
   "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
   local.location +
   "?unitGroup=metric&include=current&key=P9J7ZGZ9SBGSZQTDBMT86WNN3&contentType=json";
fetch(url)
   .then((response) => response.json())
   .then((data) => {
      console.log(data);
      city.innerHTML = `${data.address}`;
      weather.innerHTML = `${data.currentConditions.temp}° <br/>
${data.currentConditions.conditions}`;

      if (data.currentConditions.icon == "partly-cloudy-day") {
         animation.innerHTML = `<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/fSXHTR5nSzKMOPVodt" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/O2-Slovakia-fSXHTR5nSzKMOPVodt">via GIPHY</a></p>`;
      }

      if (data.currentConditions.icon == "rain") {
         animation.innerHTML = `<div style="width:100%;height:0;padding-bottom:74%;position:relative;"><iframe src="https://giphy.com/embed/39fj7g99qyD72" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/cute-dancing-39fj7g99qyD72">via GIPHY</a></p>`;
      }

      if (data.currentConditions.icon == "cloudy") {
         animation.innerHTML = `<div style="width:100%;height:0;padding-bottom:67%;position:relative;"><iframe src="https://giphy.com/embed/Cn46Wi1Fvh11S" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/landscape-time-lapse-photographers-on-tumblr-Cn46Wi1Fvh11S">via GIPHY</a></p>
   `;
      }

      if (data.currentConditions.icon == "clear-day") {
         animation.innerHTML = `<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/mno6BJfy8USic" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/sky-clouds-mno6BJfy8USic">via GIPHY</a></p>
   `;
      }

      if (data.currentConditions.icon == "snow") {
         animation.innerHTML = `<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/l2JIaYp6P3WT5Ybu0" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/justin-g-snow-dive-l2JIaYp6P3WT5Ybu0">via GIPHY</a></p>
   `;
      }

      if (data.currentConditions.icon == "partly-cloudy-night") {
         animation.innerHTML = `<div style="width:100%;height:0;padding-bottom:67%;position:relative;"><iframe src="https://giphy.com/embed/Cn46Wi1Fvh11S" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/landscape-time-lapse-photographers-on-tumblr-Cn46Wi1Fvh11S">via GIPHY</a></p>
   `;
      }
   })
   .catch((err) => {
      alert("Wrong city name");
      console.log(err);
   });

// object zodiac

let randomQuote = document.getElementById("randomQuote");

let qZodiac = {
   rat: [
      "Rats have a quick nature and the ability to fend for themselves, so those born in the year of the rat are known to bring in wealth and abundance to their households.",
      "They tend to be ambitious and financially successful, and know a thing or two about saving!",
      "People who only see the present dont consider the future. If you only see as far as a rat, you are not looking towards the future.",
   ],
   ox: [
      "Those born in the year of the ox are steadfast and hard workers.",
      "They are not the most emotionally vulnerable and may be stubborn at times, but they are respectful, patient, and dependable beings.",
      "And, in the face of hardship, oxes will brave it through and never give up.",
   ],
   tiger: [
      "Known to be the leader of the pack and for their protective qualities, those born in the year of the tiger are highly regardedTigers are confident, courageous, and adventurous, and seek justice.",
      "Tigers are confident, courageous, and adventurous, and seek justice.",
      "Sometimes, they may become arrogant or reckless in the face of danger.",
   ],
   rabbit: [
      "Sometimes, they may become arrogant or reckless in the face of danger.",
      "Cute and dainty in appearance, those born in the year of the rabbit tend to have soft and gentle traits",
      "Rabbits are reserved, but they have a strong sense of judgement and responsibility and an eye for details.",
   ],
   dragon: [
      "When it comes to romance, one would be lucky to be with a rabbit as they strongly reciprocate love upon meeting their counterpart.",
      "Possessing a fiery spirit, those born in the dragon year have an adventurous spirit and are energetic and outspoken.",
      "Possessing a fiery spirit, those born in the dragon year have an adventurous spirit and are energetic and outspoken.",
   ],
   snake: [
      "Although their patience is tested at times, once a dragon sets its sights on the prize, it will persevere.",
      "People born in the snake year are determined beings who take ownership. However, they can be lazy, anxious, and jealous.",
      "Bearing physical similarities to a dragon, but smaller, snakes are witty and curious.",
   ],
   horse: [
      "They may seem sly and stone cold, but once one has the honour to get to know a snake, they are warm at heart.",
      "Horses have an independent nature and are freedom seekers, which should come as no surprise given their long stride.",
      "Those born in the horse year are renowned for their positivity and energetic push for life.",
   ],
   goat: [
      "At times, they can be irresponsible and moody if you catch them on an off day.",
      "They show empathy and have a cheerful soul, despite being known to have a hard life in comparison to the other Chinese zodiac animals.",
      "On the contrary, goats can be lazy and disorganised.",
   ],
   monkey: [
      "Monkeys are all about being unpredictable yet entertaining and fun.",
      "Those born in the year of the monkey do things that they find interesting and care about.",
      "Those lucky to be with a monkey in a romantic setting can be prepared to be charmed away, too.",
   ],
   rooster: [
      "They make reliable people, planning things in advance, and are quick-witted with a keen eye.",
      "As sharp as its spur and prized with a high EQ, roosters are clever and can put up a debate.",
      "people born in the rooster year tend to be creative, adventurous, and entertaining",
   ],
   dog: [
      "Dogs are notoriously known to be loyal companions.",
      "Those born in the dog year are trustworthy and honest above all else, rarely breaking rules as they try to live a quiet and peaceful life.",
      "They are selfless and playful, exactly as one especially as a dog owner can imagine.",
   ],
   pig: [
      "Pigs are typically mistaken to be lazy in nature, but they are everything but that!",
      "People born in the pig year are generous, outgoing, caring, and intelligent.",
      "They may get materialistic and impatient at times.",
   ],
};

// Zodiac if else

if (
   birthYear == 1948 ||
   birthYear == 1960 ||
   birthYear == 1972 ||
   birthYear == 1984 ||
   birthYear == 1996 ||
   birthYear == 2008 ||
   birthYear == 2020
) {
   let zodiac = (document.getElementById("zodiac").src =
      "Images/zodiac/rat.png");
   randomQuote.innerHTML = qZodiac.rat[Math.floor(Math.random() * 3)];
}
if (
   birthYear == 1949 ||
   birthYear == 1961 ||
   birthYear == 1973 ||
   birthYear == 1985 ||
   birthYear == 1997 ||
   birthYear == 2009 ||
   birthYear == 2021
) {
   let zodiac = (document.getElementById("zodiac").src =
      "Images/zodiac/ox.png");
   randomQuote.innerHTML = qZodiac.ox[Math.floor(Math.random() * 3)];
}

if (
   birthYear == 1950 ||
   birthYear == 1962 ||
   birthYear == 1974 ||
   birthYear == 1986 ||
   birthYear == 1998 ||
   birthYear == 2010
) {
   let zodiac = (document.getElementById("zodiac").src =
      "Images/zodiac/tiger.png");
   randomQuote.innerHTML = qZodiac.tiger[Math.floor(Math.random() * 3)];
}

if (
   birthYear == 1951 ||
   birthYear == 1963 ||
   birthYear == 1975 ||
   birthYear == 1987 ||
   birthYear == 1999 ||
   birthYear == 2011
) {
   let zodiac = (document.getElementById("zodiac").src =
      "Images/zodiac/rabbit.png");
   randomQuote.innerHTML = qZodiac.rabbit[Math.floor(Math.random() * 3)];
}

if (
   birthYear == 1952 ||
   birthYear == 1964 ||
   birthYear == 1976 ||
   birthYear == 1988 ||
   birthYear == 2000 ||
   birthYear == 2012
) {
   let zodiac = (document.getElementById("zodiac").src =
      "Images/zodiac/dragon.png");
   randomQuote.innerHTML = qZodiac.dragon[Math.floor(Math.random() * 3)];
}

if (
   birthYear == 1953 ||
   birthYear == 1965 ||
   birthYear == 1977 ||
   birthYear == 1989 ||
   birthYear == 2001 ||
   birthYear == 2013
) {
   let zodiac = (document.getElementById("zodiac").src =
      "Images/zodiac/snake.png");
   randomQuote.innerHTML = qZodiac.snake[Math.floor(Math.random() * 3)];
}

if (
   birthYear == 1954 ||
   birthYear == 1966 ||
   birthYear == 1978 ||
   birthYear == 1990 ||
   birthYear == 2002 ||
   birthYear == 2014
) {
   let zodiac = (document.getElementById("zodiac").src =
      "Images/zodiac/horse.png");
   randomQuote.innerHTML = qZodiac.horse[Math.floor(Math.random() * 3)];
}

if (
   birthYear == 1955 ||
   birthYear == 1967 ||
   birthYear == 1979 ||
   birthYear == 1991 ||
   birthYear == 2003 ||
   birthYear == 2015
) {
   let zodiac = (document.getElementById("zodiac").src =
      "Images/zodiac/goat.png");
   randomQuote.innerHTML = qZodiac.goat[Math.floor(Math.random() * 3)];
}

if (
   birthYear == 1956 ||
   birthYear == 1968 ||
   birthYear == 1980 ||
   birthYear == 1992 ||
   birthYear == 2004 ||
   birthYear == 2016
) {
   let zodiac = (document.getElementById("zodiac").src =
      "Images/zodiac/monkey.png");
   randomQuote.innerHTML = qZodiac.monkey[Math.floor(Math.random() * 3)];
}

if (
   birthYear == 1957 ||
   birthYear == 1969 ||
   birthYear == 1981 ||
   birthYear == 1993 ||
   birthYear == 2005 ||
   birthYear == 2017
) {
   let zodiac = (document.getElementById("zodiac").src =
      "Images/zodiac/rooster.png");
   randomQuote.innerHTML = qZodiac.rooster[Math.floor(Math.random() * 3)];
}

if (
   birthYear == 1958 ||
   birthYear == 1970 ||
   birthYear == 1982 ||
   birthYear == 1994 ||
   birthYear == 2006 ||
   birthYear == 2018
) {
   let zodiac = (document.getElementById("zodiac").src =
      "Images/zodiac/dog.png");
   randomQuote.innerHTML = qZodiac.dog[Math.floor(Math.random() * 3)];
}

if (
   birthYear == 1959 ||
   birthYear == 1971 ||
   birthYear == 1983 ||
   birthYear == 1995 ||
   birthYear == 2007 ||
   birthYear == 2019
) {
   let zodiac = (document.getElementById("zodiac").src =
      "Images/zodiac/pig.png");
   randomQuote.innerHTML = qZodiac.pig[Math.floor(Math.random() * 3)];
}

// Class Exc

class Zodiac {
   year;
   // Constructor
   constructor(value) {
      this.year = value;
   }
   // Methods
}
