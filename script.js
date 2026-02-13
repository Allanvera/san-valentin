const botonSi = document.getElementById("si");
const botonNo = document.getElementById("no");
const mensaje = document.getElementById("mensaje");
const poema = document.getElementById("poema");

// Cuando presiona SI
botonSi.addEventListener("click", function(){

    mensaje.style.display = "block";
    poema.style.display = "block";
});

// Botón NO se mueve
botonNo.addEventListener("mouseover", function(){

    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;

    botonNo.style.transform = `translate(${x}px, ${y}px)`;
});
