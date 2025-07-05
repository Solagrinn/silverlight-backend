import { checkUrlExists } from '../utils/urlCheck.js';

export default async function urlValidatorHandler(req, res, query) {
    const url = query.url;

    if (!url) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Missing url parameter' }));
        return;
    }

    const isValid = await checkUrlExists(url);
    console.log(`hit checkurl `)
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ valid: isValid }));
}
