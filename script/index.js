const typed = new Typed('.typed', {
    strings : [
        '<i class="" >Jr. developer</i>',
        '<i class="" >Student</i>',
        '<i class="" >Electronic technician</i>'
    ],
    stringsElement: '#izquierda',
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    contentType: 'html',
});

if (screen.width <= 768) {
    console.log('prueba')
    window.location = "mobile.html";
}