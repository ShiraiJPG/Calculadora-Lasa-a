const TIEMPO_COCCION = 40;

function calcular() {

    let capas = prompt("¿Cuántas capas tiene la lasaña?");
    let minutos = prompt("¿Cuántos minutos lleva en el horno?");

    capas = Number(capas);
    minutos = Number(minutos);

    let tiempoPreparacion = capas * 2;
    let tiempoRestante = TIEMPO_COCCION - minutos;
    let tiempoTotal = tiempoPreparacion + minutos;

    document.getElementById("restante").textContent =
        "Tiempo restante en el horno: " + tiempoRestante + " minutos.";

    document.getElementById("preparacion").textContent =
        "Tiempo de preparación: " + tiempoPreparacion + " minutos.";

    document.getElementById("total").textContent =
        "Tiempo total de trabajo: " + tiempoTotal + " minutos.";
}
