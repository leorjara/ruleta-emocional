const svg = document.getElementById("ruleta-svg");
const btnGirar = document.getElementById("btn-girar");
const resultado = document.getElementById("resultado-texto");

const emocionesBase = [
    { nombre: "Ira", color: "--ira", secundario: ["Amenazado", "Odioso", "Desquiciado", "Agresivo", "Frustrado", "Distante"] },
    { nombre: "Disgusto", color: "--disgusto", secundario: ["Crítico", "Desaprobado", "Decepcionado", "Terrible", "Evasivo", "Culpable"] },
    { nombre: "Tristeza", color: "--tristeza", secundario: ["Ansioso", "Abandonado", "Desesperado", "Deprimido", "Solitario", "Aburrido"] },
    { nombre: "Felicidad", color: "--felicidad", secundario: ["Optimista", "Íntimo", "Pacífico", "Poderoso", "Aceptado", "Orgulloso"] },
    { nombre: "Sorpresa", color: "--sorpresa", secundario: ["Interesado", "Efusivo", "Asombrado", "Confundido", "Sorprendido", "Interesado"] },
    { nombre: "Miedo", color: "--miedo", secundario: ["Herido", "Humillado", "Rechazado", "Sumiso", "Inseguro", "Asustado"] }
];

function dibujarPrimerNivel() {
    svg.innerHTML = ""; 
    const radioInterno = 35;
    const radioExterno = 50;
    const anguloPaso = 360 / emocionesBase.length;

    const rad = (a) => (a - 90) * Math.PI / 180;
    const estilos = getComputedStyle(document.body);

    // DIBUJAR NIVEL 2 (EXTERIOR)
    emocionesBase.forEach((padre, i) => {
        const inicioPadre = i * anguloPaso;
        const hijas = padre.secundario;
        const anguloHija = anguloPaso / hijas.length;

        hijas.forEach((hija, j) => {
            const inicioA = inicioPadre + (j * anguloHija);
            const finA = inicioA + anguloHija;
            const anguloMedio = inicioA + (anguloHija / 2);

                    // Coordenadas para los 4 puntos del sector exterior

            const x1 = 50 + radioInterno * Math.cos(rad(inicioA));
            const y1 = 50 + radioInterno * Math.sin(rad(inicioA));
            const x2 = 50 + radioExterno * Math.cos(rad(inicioA));
            const y2 = 50 + radioExterno * Math.sin(rad(inicioA));
            const x3 = 50 + radioExterno * Math.cos(rad(finA));
            const y3 = 50 + radioExterno * Math.sin(rad(finA));
            const x4 = 50 + radioInterno * Math.cos(rad(finA));
            const y4 = 50 + radioInterno * Math.sin(rad(finA));

            const d = `M ${x1} ${y1} L ${x2} ${y2} A ${radioExterno} ${radioExterno} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${radioInterno} ${radioInterno} 0 0 0 ${x1} ${y1} Z`;
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", d);
            path.setAttribute("fill", estilos.getPropertyValue(padre.color).trim());
            path.setAttribute("opacity", "0.7");
            path.setAttribute("stroke", "white");
            path.setAttribute("stroke-width", "0.1");
            svg.appendChild(path);
        //Texto del nivel secundario

            const rTexto = 42;
            const tx = 50 + rTexto * Math.cos(rad(anguloMedio));
            const ty = 50 + rTexto * Math.sin(rad(anguloMedio));
            const texto = document.createElementNS("http://www.w3.org/2000/svg", "text");
            texto.setAttribute("x", tx);
            texto.setAttribute("y", ty);
            texto.setAttribute("class", "emocion-texto-secundario");
            texto.setAttribute("transform", `rotate(${anguloMedio}, ${tx}, ${ty})`);
            texto.textContent = hija;
            svg.appendChild(texto);
        });
    });

    // ELABORACION DE NIVEL 1 (CENTRO)
    emocionesBase.forEach((emo, i) => {
        const inicioAngulo = i * anguloPaso;
        const finAngulo = (i + 1) * anguloPaso;
        const anguloMedio = inicioAngulo + (anguloPaso / 2);

        const x1 = 50 + radioInterno * Math.cos(rad(inicioAngulo));
        const y1 = 50 + radioInterno * Math.sin(rad(inicioAngulo));
        const x2 = 50 + radioInterno * Math.cos(rad(finAngulo));
        const y2 = 50 + radioInterno * Math.sin(rad(finAngulo));

        const pathData = `M 50 50 L ${x1} ${y1} A ${radioInterno} ${radioInterno} 0 0 1 ${x2} ${y2} Z`;

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", pathData);
        path.setAttribute("fill", estilos.getPropertyValue(emo.color).trim());

        path.setAttribute("stroke", "white");
        path.setAttribute("stroke-width", "0.3");
        svg.appendChild(path);

        // TEXTO DE LAS EMOCIONES

        const rtexto = 18;
        const tx = 50 + rtexto * Math.cos(rad(anguloMedio));
        const ty = 50 + rtexto * Math.sin(rad(anguloMedio));
        const texto = document.createElementNS("http://www.w3.org/2000/svg", "text");
        
        texto.setAttribute("x", tx);
        texto.setAttribute("y", ty);
        texto.setAttribute("class", "emocion-texto");
        texto.setAttribute("transform", `rotate(${anguloMedio}, ${tx}, ${ty})`);
        texto.textContent = emo.nombre;
        svg.appendChild(texto);
    });
}
dibujarPrimerNivel();

let gradosActuales = 0;

btnGirar.addEventListener("click", () => {

    const giroExtra = Math.floor(Math.random() * 360);
    gradosActuales += 2000 + giroExtra;

    svg.style.transform = `rotate(${gradosActuales}deg)`;
    
    resultado.textContent = "Analizando emociones...";

    setTimeout(() => {
        const anguloReal = (360 - (gradosActuales % 360)) % 360;
        const indiceP = Math.floor(anguloReal / (360 / emocionesBase.length));
        const padre = emocionesBase[indiceP];
        
        const anguloH = anguloReal % (360 / emocionesBase.length);
        const indiceH = Math.floor(anguloH / (360 / (emocionesBase.length * 6)));
        
        resultado.textContent = `Sientes ${padre.nombre}: ${padre.secundario[indiceH]}`;
    }, 5000);
});