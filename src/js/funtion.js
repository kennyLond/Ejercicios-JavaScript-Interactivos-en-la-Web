//Este codigo se utiliza para los ejercicios que no necesitan que sea visible el iframe
function runCode() {
    // Obtiene el código ingresado por el usuario en el textarea con id 'code'
    const code = document.getElementById('code').value;

    // Obtiene el iframe donde se mostrará el resultado del código ejecutado
    const iframe_none = document.getElementById('output');

    // Accede al documento interno del iframe
    const iframeDoc = iframe_none.contentDocument || iframe_none.contentWindow.document;

    // Abre el documento del iframe para poder insertar contenido dinámico
    iframeDoc.open();

    // Escribe un nuevo documento HTML dentro del iframe
    // Intenta ejecutar el código proporcionado por el usuario
    // Si ocurre un error, lo muestra en la consola y alerta al usuario
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

    // Cierra el documento del iframe para finalizar la escritura
    iframeDoc.close();
}
