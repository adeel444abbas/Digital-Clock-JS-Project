const digiClock = document.querySelector(".digiClock");


setInterval(() => {
    const date = new Date();
    // console.log(date.toLocaleTimeString());
    digiClock.innerHTML = date.toLocaleTimeString();
}, 1000)