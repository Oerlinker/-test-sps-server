const express = require('express');
const app = express();



app.use(express.json());
const routes = require('./routes');
app.use('/api', routes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
