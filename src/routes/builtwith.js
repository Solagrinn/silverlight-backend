// import staticData from '../filteredRES.json' with {type: 'json'};
import {getFilteredBuiltWithData} from "../services/builtwithService.js";

export default function builtwithHandler(req, res, query) {
    const url = query.url;
    if (!url) {
        res.writeHead(400, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: 'Missing ?url='}));
        return;
    }

    getFilteredBuiltWithData(url)
        .then(data => {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(data));
            //res.end(JSON.stringify(staticData)); For testing without using api calls
        })
        .catch(err => {
            console.error(err);
            res.writeHead(500, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({error: 'BuiltWith API call failed'}));
        });
}
