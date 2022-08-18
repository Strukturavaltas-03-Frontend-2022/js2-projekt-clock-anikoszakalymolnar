function currentTime() {
    const timeNow = new Date().toLocaleTimeString('hu');
    document.querySelector("#clock").innerHTML = timeNow;
    setTimeout(currentTime, 1000);
}
