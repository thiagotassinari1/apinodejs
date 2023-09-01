const express = require('express');
const app = express();

const PORT = 3004;

app.get('/api/teste', (request, response) => {
    response.send('Bora devs');
});

// testar o servidor
app.listen(PORT, () => console.log(`Running at port ${PORT}`));