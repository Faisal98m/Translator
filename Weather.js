const citySearchBtn=document.getElementById("city-search")
const citySearchInput=document.getElementById("city-search-input")


function getForecast (city){
  return  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=1a8fbaf9627a5193628cdbfa434d2be9`).then(r=>r.json())
}

// Event listener
citySearchBtn.addEventListener('click', (event) => {
    getForecast(citySearchInput.value).then (forecast =>{
        console.log(forecast)
    })
});