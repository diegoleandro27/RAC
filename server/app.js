import cors from 'cors';
import db from './database/db.js';
import marcasRoutes from './routes/marca.routes.js';
import combustibleRoutes from './routes/combustible.routes.js';
import tipoVehiculoRoutes from './routes/tipoVehiculos.routes.js'
import modelosRoutes from './routes/modelos.routes.js'; 
import clientesRoutes from './routes/cliente.routes.js';
import EmpleadosRoutes from './routes/Empleados.routes.js';
import Express from 'express'; 



// MiddleWare del servidor 
const app = Express(); 
app.use(cors()); 
app.use(Express.json()); 

//Enrutamiento de "rutas" de los modelos/controladores o
app.use('/marcas', marcasRoutes); 
app.use('/tipocombustible', combustibleRoutes); 
app.use('/tipovehiculo', tipoVehiculoRoutes); 
app.use('/modelos', modelosRoutes); 
app.use('/clientes', clientesRoutes); 
app.use('/empleados', EmpleadosRoutes); 

// Check de conexion a la base de datos
try {
    await db.authenticate()
    console.log("Conexion Exitosa a la Base de datos"); 
} catch (error) {
    console.log(`El error tuyo e': ${error}`) 
}

// app.get('/', (req, res) => {
//     res.send("Blyaaaaaaaaaaaaaaat"); 
// })

app.listen(3001, () => {
    console.log("Server running in port http://localhost:3001/"); 
})