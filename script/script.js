function fetch(){
    let xhr = new XMLHttpRequest();
    let link = `http://api.weatherapi.com/v1/forecast.json?key=b60d91b6c0b34aa2b60115222252804&q=Floridablanca&lang=es&dt=2025-04-28`;
    xhr.open("GET",link, true);
    xhr.onreadystatechange = function () {
            if(xhr.readyState=== 4 && xhr.status === 200){
                let data = JSON.parse(xhr.responseText);
                console.log(data);
                console.log(typeof data);
                let temp1= Math.round(data["current"]["temp_c"])
                country_name.innerHTML = `<img class="background" src="../img/background.png">
                <p class="country-name">${data["location"]["name"]}, ${data["location"]["country"]}
                <span class="temp-up">${temp1}&deg
                </span></p>
                <img class="solecito-derecha-up" src="../imgcloud_and_sun_1.png">`
            }
        }    
        xhr.send();
    }
let country_name= document.getElementById("container-up")
fetch();