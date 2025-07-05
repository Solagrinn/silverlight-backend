import { getBuiltWithData } from '../controllers/builtwithController.js';

export default function builtwithHandler(req, res, query) {
    const url = query.url;
    if (!url) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Missing ?url=' }));
        return;
    }

    getBuiltWithData(url)
        .then(data => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        })
        .catch(err => {
            console.error(err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'BuiltWith API call failed' }));
        });
}
