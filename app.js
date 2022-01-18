var searchCity = document.querySelector("#btn-search")
var textarea  = document.querySelector("#txt-area")
var outputResult = document.querySelector("#output")
var apiUrl = "api.openweathermap.org/data/2.5/weather"
function getWeather(text){
    return apiUrl + "?q=" + text + '&appid=a01331da115ad1dcd7806395dde27639'
}
function clickHandler(){
    var inputcity = textarea.value;
    fetch(getWeather(inputcity))
    .then(respone=>respone.json())
    .then(json=>{
        var cityResult = json.main.temp
        outputResult.innerHTML = cityResult;
    })
}
searchCity.addEventListener("click",clickHandler)