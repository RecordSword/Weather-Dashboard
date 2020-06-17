$(document).ready(function() {
const searchCity = $("#search-term");
const btnClear = $("#clear-all");
// const notificationElement = $("#notification");
const iconElement =$('#weather-icons');
const tempElement = $("#temperature-value p");
const descElement = $('#temperature-description p');
const locationElement = $("#location p");
const cityName = ($("#city-name").val());
const APIKey = "757f634095b01377ce64f302c19cc9db"

// query URL for current day weather 
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&appid=" + APIKey;

// .on("click") function associated with the search button

$("#btnSearch").on("click", citySearch(cityName))

function citySearch() {
    // event.preventDefault();

    //ajax "get" method for the JSON object
    $.get({
        url: queryURL,
    }).then(function (response) {
        console.log(response);
    });
};


    //button to run search
$("#btnSearch").on("click", citySearch)

//Takes API data (JSON object) and turns it into elements on the page
function upDateWeather (){
}
// function to empty out previous researches
function clear (){
    $("#weather-result").empty();
}
//.on("click") function ssociated with the clear button
$("#clear-all").on("click", clear);
})


