
import http from 'http';
import router from './router.js';


console.log('API KEY:', process.env.YOUR_BUILTWITH_API_KEY);

const server = http.createServer((req, res) => {
    router(req, res);
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
