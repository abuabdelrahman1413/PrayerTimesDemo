
let listOfCities = ['Karma an Nuzul', 'Najran', 'Cairo'];
let cityName = document.querySelector('#cityName');
let cityDate = document.getElementById('cityDate');
let fajr = document.getElementsByClassName('Fajr')[0].getElementsByClassName('time')[0];
let sunrise = document.getElementsByClassName('Sunrise')[0].getElementsByClassName('time')[0];
let dhuhr = document.getElementsByClassName('Dhuhr')[0].getElementsByClassName('time')[0];
let asr = document.getElementsByClassName('Asr')[0].getElementsByClassName('time')[0];
let maghrib = document.getElementsByClassName('Maghrib')[0].getElementsByClassName('time')[0];
let isha = document.getElementsByClassName('Isha')[0].getElementsByClassName('time')[0];


function getCity() {
    let selectElement = document.querySelector('#selectCity');
    for (let i = 0; i < listOfCities.length; i++) {
        let option = document.createElement('option');
        option.value = listOfCities[i];
        if (option.value == 'Karma an Nuzul') {
            option.text = 'كرمة';
        } else if (option.value == 'Najran') {
            option.text = 'نجران';
        }
        else if (option.value == 'Cairo') {
            option.text = 'القاهرة';
        } else {
            option.text = option.value;
        }
        selectElement.add(option);
    }
}


function getOption() {
    let country;
    let selectElement = document.querySelector('#selectCity');
    output = selectElement.value;
    if (selectElement.value == 'Karma an Nuzul') {
        country = 'Sudan';
    } else if (selectElement.value == 'Najran') {
        country = 'Saudi Arabia';
    }
    else if (selectElement.value == 'Cairo') {
        country = 'Egypt';
    }

    axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${output}&country=${country}`)
        .then((response) => {
            let Fajr = response.data.data.timings.Fajr;
            let Sunrise = response.data.data.timings.Sunrise;
            let Dhuhr = response.data.data.timings.Dhuhr;
            let Asr = response.data.data.timings.Asr;
            let Maghrib = response.data.data.timings.Maghrib;
            let Isha = response.data.data.timings.Isha;
            let dayString = response.data.data.date.hijri.weekday.ar;
            let dayNumber = response.data.data.date.hijri.day;
            let monthString = response.data.data.date.hijri.month.ar;
            let year = response.data.data.date.hijri.year;

            console.log(Fajr);
            console.log(Sunrise);
            console.log(Dhuhr);
            console.log(Asr);
            console.log(Maghrib);
            console.log(Isha);
            console.log(dayString);
            console.log(dayNumber);
            console.log(monthString);
            console.log('=============================================================');
            if (selectElement.value == 'Karma an Nuzul') {
                cityName.innerHTML = 'كرمة';
            } else if (selectElement.value == 'Najran') {
                cityName.innerHTML = 'نجران';
            }
            else if (selectElement.value == 'Cairo') {
                cityName.innerHTML = 'القاهرة';
            } else {
                cityName.innerHTML = selectElement.value;
            }
            
            let date = `${dayString}  ${dayNumber}-${monthString}-${year}`;
            cityDate.innerHTML = date;
            fajr.innerHTML = Fajr;
            dhuhr.innerHTML = Dhuhr;
            asr.innerHTML = Asr;
            sunrise.innerHTML = Sunrise;
            maghrib.innerHTML = Maghrib;
            isha.innerHTML = Isha;
        })            

    
}

getOption();

getCity();