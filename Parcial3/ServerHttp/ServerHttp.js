const http = require('http');
 
const servidor = http.createServer((req, res) => {
    
    //Configuración para permitir CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
   
    // Respuesta del servidorr
    res.write("Servidor http Node contestando a peticinn GET");
    res.end();
});
 
servidor.listen(8082, () => {
    console.log("Servidor Node HTTP corriendo en el puerto 8082");
}); 