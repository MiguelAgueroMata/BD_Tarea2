import express, { Request, Response } from 'express';
import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config(); // Cargar las variables de entorno desde .env

// Configuración de la base de datos
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER, // Servidor de Somee
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true, // Algunos servidores requieren la conexión encriptada
        trustServerCertificate: true, // Solo si tu servidor lo requiere
    },
};

// Función para conectar a la base de datos
async function connectToDatabase() {
    try {
        await sql.connect(dbConfig);
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

// Inicializar la conexión
connectToDatabase();

// Crear una aplicación Express
const app = express();
const port = 3000;

// Definir una ruta (App Route) que consulta datos desde la base de datos
app.get('/empleados', async (req: Request, res: Response) => {
    try {
        // Realizar una consulta a la base de datos
        const result = await sql.query`SELECT * FROM Empleado`;
        res.json(result.recordset); // Enviar los datos como JSON
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        res.status(500).send('Error del servidor');
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
