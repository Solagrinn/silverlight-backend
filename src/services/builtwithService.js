
import {getBuiltWithData} from '../controllers/builtwithController.js';

export async function getFilteredBuiltWithData(url) {
    const data = await getBuiltWithData(url);



    const grouped = {};

    for (const result of data?.Results || []) {
        const paths = result?.Result?.Paths || [];

        for (const path of paths) {
            const techList = path?.Technologies || [];

            for (const tech of techList) {
                const tag = tech.Tag || 'unknown';

                if (!grouped[tag]) {
                    grouped[tag] = [];
                }

                grouped[tag].push(tech.Name
                    //isPremium: tech.IsPremium,
                    //firstDetected: tech.FirstDetected,
                    //lastDetected: tech.LastDetected,
                );
            }
        }
    }

    return grouped
}
