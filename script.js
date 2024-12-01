document.getElementById('button1').addEventListener('click', function() {
    document.getElementById('alert1').style.display = "flex";
    document.getElementById('alert2').style.display = "none";
    document.getElementById('alert3').style.display = "none";
    document.getElementById('alert4').style.display = "none";
    document.getElementById('x1').addEventListener('click', function() {
        document.getElementById('alert1').style.display = "none";
    });
});

document.getElementById('button2').addEventListener('click', function() {
    document.getElementById('alert1').style.display = "none";
    document.getElementById('alert2').style.display = "flex";
    document.getElementById('alert3').style.display = "none";
    document.getElementById('alert4').style.display = "none";
    document.getElementById('x2').addEventListener('click', function() {
        document.getElementById('alert2').style.display = "none";
    });
});

document.getElementById('button3').addEventListener('click', function() {
    document.getElementById('alert1').style.display = "none";
    document.getElementById('alert2').style.display = "none";
    document.getElementById('alert3').style.display = "flex";
    document.getElementById('alert4').style.display = "none";
    document.getElementById('x3').addEventListener('click', function() {
        document.getElementById('alert3').style.display = "none";
    });
});

document.getElementById('button4').addEventListener('click', function() {
    document.getElementById('alert1').style.display = "none";
    document.getElementById('alert2').style.display = "none";
    document.getElementById('alert3').style.display = "none";
    document.getElementById('alert4').style.display = "flex";
    document.getElementById('x4').addEventListener('click', function() {
        document.getElementById('alert4').style.display = "none";
    });
});