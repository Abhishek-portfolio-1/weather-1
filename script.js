

// fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c54dacb95631330e657284be2723541d&page=1')

// .then(response =>{
//     return response.json();
// })

// .then(data => {
//     console.log(data.result[0].overview);
//     let ut =data.results[0].original_title;
    
    

// user.innerText= ut;
// // user.innerText=over;
// });

let but=document.querySelector('#btn');


function btn(){
fetch('https://api.open-meteo.com/v1/forecast?latitude=28.6654&longitude=77.4391&current=temperature_2m,precipitation,rain,wind_speed_10m,is_day&timezone=auto')
.then((response =>{
    return response.json();
}))
.then(data =>{
    console.log(data);
    let temp=data.current.temperature_2m;
    let user=document.querySelector('.ui');
    user.innerText= 'Temperature :' + temp;
    
    let us=document.querySelector('.ua');
    let time=data.current.time;
    us.innerText= 'Time :'+ time;
    let lat=document.querySelector('.lat');
    let lat1=data.latitude;
    lat.innerText= 'Latitude :' + lat1;
    let lon=document.querySelector('.lon');
    let lon1=data.longitude;
    lon.innerText= 'Longitude  : '+lon1;
    let wind=data.current.wind_speed_10m;
    let win=document.querySelector('.win');
    win.innerText= 'Wind Speed : '+ wind;  
    let rain=document.querySelector('.rain');
    let ra=data.current.rain;
    rain.innerText= 'Rain :'+ra;
    
})
}
but.addEventListener('click',btn);


