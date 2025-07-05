import http from 'http';
import https from 'https';
import { URL } from 'url';

export function checkUrlExists(targetUrl) {
    return new Promise((resolve) => {
        try {
            const parsed = new URL(targetUrl);
            const lib = parsed.protocol === 'https:' ? https : http;

            const req = lib.request(targetUrl, { method: 'HEAD' }, (res) => {
                resolve(res.statusCode < 400);
            });

            req.on('error', () => resolve(false));
            req.end();
        } catch {
            resolve(false); // Invalid URL format
        }
    });
}
