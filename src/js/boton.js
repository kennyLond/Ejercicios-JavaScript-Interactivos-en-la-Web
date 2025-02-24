
// Función para ejecutar el código y mostrar el resultado en el iframe

// Escucha el evento 'DOMContentLoaded' para asegurarse de que todo el contenido del DOM esté cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene el botón con la clase 'buttoncod' que ejecutará el código
    const runCodeButton = document.querySelector('.buttoncod');

    // Asigna una función al evento 'onclick' del botón
    runCodeButton.onclick = function() {
        // Obtiene el código escrito por el usuario en el textarea con id 'code'
        const code = document.getElementById('code').value;

        // Obtiene el iframe donde se mostrará el resultado del código ejecutado
        const iframe = document.getElementById('output');

        // Accede al documento interno del iframe
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

        // Abre el documento del iframe para insertar contenido nuevo
        iframeDoc.open();

        // Escribe un nuevo documento HTML dentro del iframe
        // Intenta ejecutar el código proporcionado por el usuario
        // Si hay un error, lo registra en la consola y muestra una alerta con el mensaje del error
        iframeDoc.write(`
            <html>
                <body>
                    <script>
                        try {
                            ${code}
                        } catch (e) {                           
                            console.error(e);
                            alert('Error en el código: ' + e.message);
                        }
                    <\/script>
                </body>
            </html>
        `);

        // Cierra el documento del iframe para finalizar los cambios
        iframeDoc.close();
    };
});