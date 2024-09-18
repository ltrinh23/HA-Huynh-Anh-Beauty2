document.querySelectorAll('.seed').forEach(seed => {
    seed.addEventListener('mouseover', () => {
    seed.style.animationPlayState = 'running';
});
});


window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

/*

setTimeout(function(){
    document.getElementById("myImage").style.display = "block";
  }, 5000);


function myFunction() {
    location.reload();
}  


var go = function () {
    var opac = function (delay) {
        var img = document.createElement('img');
        img.src = "logo.PNG";
        document.body.appendChild(img);
        var level = 0;
        var step = function () {
            img.style.opacity = level;
            if (level <= 1) {
                level += 0.1;
                setTimeout(step, delay);
            }
        };
        step();
    };
    opac(100);
};


window.addEventListener('load', () => {
    const img = document.getElementById('myImage');
    
    // Set a timeout to allow the image to be fully loaded before revealing it
    setTimeout(() => {
        img.style.opacity = 1;
        img.style.filter = 'blur(0px)';
    }, 100); // Delay to start the effect
});

*/