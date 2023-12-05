const express = require('express');
const cors = require('cors');
const mysql2 = require('mysql2');
const { jsPDF } = require('jspdf');


const app = express();
app.use(cors());
app.use(express.json());


const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'loleiro123',
    database: 'EJERCICIOSWEB'
});

app.get('/estudiante', (req, res) => {
    console.log(req.query.numero_control);

    let consulta = '';

    if (typeof req.query.numero_control === 'undefined') {
        consulta = 'SELECT * FROM estudiante';
    } else {
        consulta = `SELECT * FROM estudiante WHERE numero_control = ${req.query.numero_control}`;
    }

    console.log(consulta);

    connection.query(consulta, function (err, results, fields) {
        if (results.length === 0) {
            res.json({ mensaje: 'Estudiante no encontrado' });
        } else {
            res.json(results);
        }
    });
});

app.get('/descargar-pdf/:numero_control', (req, res) => {
    const numeroControl = req.params.numero_control;

    // Realiza la consulta para obtener los datos del estudiante por número de control
    const consulta = `SELECT * FROM estudiante WHERE numero_control = ${numeroControl}`;

    connection.query(consulta, (err, results, fields) => {
        if (err) {
            console.error('Error al obtener datos del estudiante:', err);
            res.status(500).json({ mensaje: 'Error al obtener datos del estudiante' });
        } else {
            if (results.length === 0) {
                res.json({ mensaje: 'Estudiante no encontrado' });
            } else {
                // Genera el PDF
                const pdf = new jsPDF();
                pdf.text(`Número de Control: ${results[0].numero_control}`, 10, 10);
                pdf.text(`Nombre: ${results[0].nombre_pila}`, 10, 20);
                pdf.text(`Apellido Paterno: ${results[0].apellido_paterno}`, 10, 30);
                pdf.text(`Apellido Materno: ${results[0].apellido_materno}`, 10, 40);

                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', `attachment; filename=estudiante_${numeroControl}.pdf`);
                res.end(pdf.output());
            }
        }
    });
});

app.post('/estudiante', (req, res) => {
    const estudiante = req.body;
    connection.query('INSERT INTO estudiante SET ?', estudiante, (err, result) => {
        if (err) {
            console.error('Error al guardar el estudiante:', err);
            res.status(500).json({ mensaje: 'Error al guardar el estudiante' });
        } else {
            res.json({ mensaje: 'Estudiante guardado correctamente' });
        }
    });
});


app.put('/estudiante/:numero_control', (req, res) => {
    const numeroControl = req.params.numero_control;
    const updatedData = req.body;

    connection.query('UPDATE estudiante SET ? WHERE numero_control = ?', [updatedData, numeroControl], (err, result) => {
        if (err) {
            console.error('Error al actualizar el estudiante:', err);
            res.status(500).json({ mensaje: 'Error al actualizar el estudiante' });
        } else {
            res.json({ mensaje: 'Estudiante actualizado correctamente' });
        }
    });
});


app.delete('/estudiante/:numero_control', (req, res) => {
    const numeroControl = req.params.numero_control;
    connection.query('DELETE FROM estudiante WHERE numero_control = ?', numeroControl, (err, result) => {
        if (err) {
            console.error('Error al eliminar el estudiante:', err);
            res.status(500).json({ mensaje: 'Error al eliminar el estudiante' });
        } else {
            res.json({ mensaje: 'Estudiante eliminado correctamente' });
        }
    });
});

app.listen(8082, () => {
    console.log('Servidor express corriendo en puerto 8082');
});
