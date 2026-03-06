# 🎡 Ruleta Emocional

¡Bienvenido a la **Ruleta Emocional**! Una herramienta interactiva diseñada para la exploración y el autodescubrimiento emocional de una manera visual y dinámica.

## 🚀 Descripción

Este mini proyecto permite a los usuarios identificar sus sentimientos mediante una ruleta de dos niveles basada en la rueda de las emociones. Al girar la ruleta, el fondo de la pantalla cambia dinámicamente según la emoción seleccionada, ofreciendo una experiencia inmersiva.

## ✨ Características Principales

* **Ruleta de Doble Nivel**: Visualización de emociones primarias y secundarias mediante un sistema de anillos concéntricos creados con SVG.
* **Fondo Dinámico**: El fondo de la página utiliza gradientes radiales que se actualizan suavemente (`transition: background 1.5s`) al color de la emoción resultante.
* **Diseño Adaptable (Responsive)**: Optimizado para dispositivos móviles con ajustes específicos en el tamaño de la ruleta y tipografía.
* **Interfaz Intuitiva**: Botón de giro con efectos de elevación y retroalimentación inmediata sobre el análisis emocional.

## 🛠️ Tecnologías Utilizadas

* **HTML5**: Estructura semántica del sitio.
* **CSS3**: Estilos personalizados, variables nativas (`--variables`), animaciones y diseño adaptable.
* **JavaScript (ES6+)**: Lógica de giro aleatorio, cálculos de ángulos para determinar la emoción y manipulación del DOM para el cambio de colores.
* **SVG**: Generación dinámica de los sectores de la ruleta y posicionamiento de texto radial.

## 🔧 Instalación y Uso

1. Clona este repositorio:
```bash
git clone https://github.com/leorjara/ruleta-emocional.git

```


2. Abre el archivo `index.html` en tu navegador preferido.
3. ¡Haz clic en **Girar ruleta** y descubre cómo te sientes hoy!

## 📝 Detalles Técnicos Destacados

* **Cálculo de Resultados**: La ruleta utiliza un sistema de grados acumulativos para evitar que el giro se vea interrumpido y calcula el ángulo real mediante el operador módulo (`%`) para identificar la emoción exacta.
* **Variables CSS**: Se implementó el uso de `getComputedStyle` en JavaScript para leer los colores directamente desde el CSS, manteniendo el código limpio y fácil de mantener.

---

**Desarrollado por [leorjara**](https://www.google.com/search?q=https://github.com/leorjara)