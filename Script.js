catchData();
    async function catchData(){
    const response = await fetch('https://corona.lmao.ninja/v3/covid-19/countries/India?strict=true');
    const data = await response.json();
    document.getElementById("flag").src = data.countryInfo.flag;
    document.getElementById("country").innerHTML = data.country;
    document.getElementById("Active_Cases").innerHTML = data.active;
    document.getElementById("Total_Cases").innerHTML = data.cases;
    document.getElementById("Critical_Cases").innerHTML = data.critical;
    document.getElementById("Total_Death").innerHTML = data.deaths;
    document.getElementById("Recovered_Cases").innerHTML = data.recovered;
    document.getElementById("Total_Test_Done").innerHTML = data.tests;
    document.getElementById("Today's_Cases").innerHTML=data.todayCases;
    document.getElementById("Today_Recovered").innerHTML=data.todayRecovered;
    document.getElementById("Today_Death").innerHTML=data.todayDeaths;
  }