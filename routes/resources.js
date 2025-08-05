import express from 'express';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const router = express.Router();


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
// /Users/galinaatamankina/git-repos/ressource_catalog_service/server.js
// /Users/galinaatamankina/git-repos/ressource_catalog_service/routes/resources.js

const data_file = path.join(__dirname, '../data', 'resources.json');
// darum ../data dann so


// resources weg
router.get('/', (req, res) => {
    try {
        const data = readFileSync(data_file, 'utf8');
        const resources = JSON.parse(data);
        res.json(resources);
    } catch (error) {
        res.status(500).json({ error: 'Interner Serverfehler beim Laden der Ressourcen -Daten' });
    }
});
// resources weg
router.get('/:id', (req, res) => {
    try {
        const resourceId = req.params.id;
        const data = readFileSync(data_file, 'utf8');
        const resources = JSON.parse(data);
        const resource = resources.find(r => r.id === resourceId);

        if (resource) {
            res.json(resource);
        } else {
            res.status(404).json({ error: `Ressource mit ID ${resourceId} nicht gefunden.` })
        }

    } catch (error) {
        res.status(500).json({ error: 'Interner Serverfehler beim Laden der Ressourcen -Daten' });
    }


});


export default router;
