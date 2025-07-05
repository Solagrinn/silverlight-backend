import { parse } from 'url';
import builtwithHandler from './routes/builtwith.js';
import urlValidatorHandler from './routes/urlValidator.js';
import { notFound } from './utils/response.js';

export default function router(req, res) {
    const { pathname, query } = parse(req.url, true);

    if (req.method === 'GET' && pathname === '/api/builtwith') {
        builtwithHandler(req, res, query);
    } else if (req.method === 'GET' && pathname === '/api/validate-url') {
        urlValidatorHandler(req, res, query);
    } else {
        notFound(res);
    }
}
