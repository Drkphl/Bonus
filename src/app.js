import e from 'express';

import explorer_router from './routes/explorer_router.js';
import species_router from './routes/species_router.js';
import expedition_router from './routes/expedition_router.js';

const app = e();

app.use(e.json());

app.use('/explorer', explorer_router);
app.use('/species', species_router);
app.use('/expedition', expedition_router);

app.listen(3000, () => console.log('Servidor rodando na porta ' + 3000));
