const signData = [
    {
        name: 'Aries',
        posterUrl: '../images/ariesMars.png',
    },
    {
        name: 'Taurus',
        posterUrl: '../images/taurusGreen.png',
    },
    {
        name: 'Gemini',
        posterUrl: '../images/geminiYellow.png',
    },
    {
        name: 'Cancer',
        posterUrl: '../images/cancerBlueMoon.png',
    },
    {
        name: 'Leo',
        posterUrl:'../images/leoSun.png',
    },
    {
        name: 'Virgo',
        posterUrl: '../images/virgoEarth.png',
    },
    {
        name: 'Libra',
        posterUrl: '../images/libraPink.png'
    },
    {
        name: 'Scorpio',
        posterUrl: '../images/scorpioBlack.png',
    },
    {
        name: 'Sagittarius',
        posterUrl: '../images/sagPurple.png',
    },
    {
        name: 'Capricorn',
        posterUrl: '../images/capricornCharc.png',
    },
    {
        name: 'Aquarius',
        posterUrl: '../images/aquariusWater.png',
    },
    {
        name: 'Pisces',
        posterUrl: '../images/piscesWater.png',
    }

];

const posterContainer = document.getElementById('posterContainer');
// const dateLabel = document.createElement('div');
// dateLabel.innerText = 'Date: ';
// posterContainer.appendChild(dateLabel);

signData.forEach(sign => {
    const poster = document.createElement('img');
    poster.src = sign.posterUrl;
    poster.alt = `${sign.name} poster`;
    poster.addEventListener('click', () => {
        updateHoroscope(sign.name.toLowerCase());
        // const currentDate = document.createElement('span');
        // currentDate.innerText = new Date().toLocaleDateString();
        // posterContainer.appendChild(currentDate);
    });
    posterContainer.appendChild(poster);
});

const dateText = document.getElementById('dateText');
const dateLabel = document.createElement('span');
dateLabel.innerText = "Date: ";
dateText.appendChild(dateLabel);
const dateValue = document.createElement('span');
dateText.appendChild(dateValue);

function updateHoroscope(sign) {
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;
    console.log(URL);
    fetch(URL, {
        method: 'POST'
    })
    .then(response => response.json())
    .then(json => {
        const date = json.current_date;
        const description = json.description;
        const compatibility = json.compatibility;
        // dateText.innerText = current_date;
        dateValue.innerText = json.current_date;
        horoscopeText.innerText = description;
        compatibilityText.innerText = compatibility;
        
    })
    .catch(error => console.log(error));
}


// const URL = `https://aztro.sameerkumar.website?sign=${sign}&day=today`;
// fetch(URL, {
//     method: 'POST'
// })
// fetch('https://aztro.sameerkumar.website?sign=virgo&day=today', {
//     method: 'POST',
// })
//   .then(response => response.json())
//   .then(data => {
//     const description = data.description;
//     const compatibility = data.compatibility;
//     document.getElementById("horoscopeText").innerText = description;
//     document.getElementById("compatibilityText").innerText = compatibility;
//   }) 
//   .catch(error => console.log(error));

// below is working:
// const signImages = {
//     aries: "",
//     taurus: "",
//     gemini: "",
//     cancer: "",
//     leo: "",
//     virgo: "../images/virgoStarsB.png",
//     libra: "../images/libraSignNoBckg.png",
//     scorpio: "",
//     sagittarius: "",
//     capricorn: "",
//     aquarius: "",
//     pisces: "",

// };

