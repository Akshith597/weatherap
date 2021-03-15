function getProp(){
    let city = document.getElementById("cityname").value;
    var y=document.getElementById("city");
    y.innerHTML = "<h2>Weather at "+city+"</h2>"
    
    let weather = fetch("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=3dd0107503cefb19bbf5bc1b2c2b6a1a");
    // console.log(weather);
    weather.then((result)=>{
         let res = result.json();
         res.then((finalRes)=>{
             let d1 = finalRes.list[2].dt_txt.slice(0,10);
             let d2 = finalRes.list[10].dt_txt.slice(0,10);
             let d3 = finalRes.list[18].dt_txt.slice(0,10);
             let d4 = finalRes.list[26].dt_txt.slice(0,10);
             let d5 = finalRes.list[34].dt_txt.slice(0,10);
             
             let v1 = finalRes.list[2].main.temp;
             let v2 = finalRes.list[10].main.temp;
             let v3 = finalRes.list[18].main.temp;
             let v4 = finalRes.list[26].main.temp;
             let v5 = finalRes.list[34].main.temp;
    
                                                                                   
             var ctx = document.getElementById('myChart').getContext('2d');
             var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [d1, d2,d3,d4,d5],
                    datasets: [{
                        label: 'Temprature',
                        data: [v1, v2,v3,v4,v5],
    
    
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                }
            });
         })
    })
    }
    